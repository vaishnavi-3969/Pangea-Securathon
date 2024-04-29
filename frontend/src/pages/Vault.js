import React, { useState } from 'react';
import axios from 'axios';

const Vault = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [linkInput, setLinkInput] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleLinkChange = (event) => {
        setLinkInput(event.target.value);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            // Uploading file
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                // Step 1: Scan the file using the Pangea API
                const scanResponse = await axios.post('https://file-scan.aws.us.pangea.cloud/v1/scan', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Step 2: Check if the file is safe or malicious
                if (scanResponse.data.result.verdict === 'malicious') {
                    setUploadStatus('Malicious document detected. Upload failed.');
                } else {
                    // Safe document
                    setUploadStatus('File is safe.');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadStatus('Error uploading file.');
            }
        } else if (linkInput) {
            // Checking link validity
            try {
                const response = await axios.head(linkInput);
                if (response.status === 200) {
                    // Step 1: Scan the link using the Pangea API
                    const scanResponse = await axios.post('https://file-scan.aws.us.pangea.cloud/v1/scan', { url: linkInput });

                    // Step 2: Check if the link is safe or malicious
                    if (scanResponse.data.result.verdict === 'malicious') {
                        setUploadStatus('Malicious link detected.');
                    } else {
                        // Safe link
                        setUploadStatus('Link is safe.');
                    }
                } else {
                    setUploadStatus('Link is not valid.');
                }
            } catch (error) {
                console.error('Error checking link:', error);
                setUploadStatus('Error checking link.');
            }
        } else {
            setUploadStatus('Please select a file or enter a link.');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Vault</h2>
            <p className="text-gray-600 mb-4">Upload your personal health-related or medical-related confidential documents or enter a link to check its validity.</p>
            <input type="file" onChange={handleFileChange} className="mb-4" />
            <input type="text" placeholder="Enter link" value={linkInput} onChange={handleLinkChange} className="mb-4" />
            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Upload / Check Link
            </button>
            <p className="text-red-500 mt-2">{uploadStatus}</p>
        </div>
    );
};

export default Vault;