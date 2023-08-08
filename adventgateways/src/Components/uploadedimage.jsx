// UploadedImage.js
import React from 'react';

const UploadedImage = ({ imageUrl }) => {
  return (
    <div className="uploaded-image">
      <img src={imageUrl} alt="Uploaded" />
    </div>
  );
};

export default UploadedImage;
