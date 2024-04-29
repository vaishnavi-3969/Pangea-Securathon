import React, { useState } from 'react';
import axios from 'axios';

const Vault = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            // Step 1: Scan the file using the Pangea API
            const scanResponse = await axios.post('https://file-scan.aws.us.pangea.cloud/v1/scan', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Step 2: Poll the Pangea API until we get a response
            let requestID = scanResponse.data.request_id;
            let pollingInterval = setInterval(async () => {
                const pollResponse = await axios.get(`https://file-scan.aws.us.pangea.cloud/request/${requestID}`);
                if (pollResponse.data.status === 'success') {
                    clearInterval(pollingInterval);
                    
                    // Check if the file is safe or malicious
                    if (pollResponse.data.result.verdict === 'malicious') {
                        setUploadStatus('Malicious document detected. Upload failed.');
                    } else {
                        // Safe document, proceed with upload
                        setUploadStatus('File is safe.');
                        console.log('Pangea scan result:', pollResponse.data);
                    }
                }
            }, 5000); // Poll every 5 seconds
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Error uploading file.');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Vault</h2>
            <p className="text-gray-600 mb-4">Upload your personal health-related or medical-related confidential documents.</p>
            <input type="file" onChange={handleFileChange} className="mb-4" />
            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Upload
            </button>
            <p className="text-red-500 mt-2">{uploadStatus}</p>
        </div>
    );
};

export default Vault;