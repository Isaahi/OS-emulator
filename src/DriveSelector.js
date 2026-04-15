import React from 'react';

const DriveSelector = ({ onDriveSelect }) => {
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            onDriveSelect(files[0]);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
};

export default DriveSelector;