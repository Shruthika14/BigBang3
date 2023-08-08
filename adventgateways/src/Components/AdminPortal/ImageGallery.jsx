
// import React, { useState } from 'react';
// import axios from 'axios';
// import Dropzone from 'react-dropzone';
// import './ImageGallery.css';
 

// const ImageGallery = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [galleryImages, setGalleryImages] = useState([]);

//   const handleImageUpload = async (acceptedFiles) => {
//     const formData = new FormData();
//     formData.append('imageFile', acceptedFiles[0]);

//     try {
//       const response = await axios.post('https://localhost:7222/api/Image', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setUploadedImage(URL.createObjectURL(acceptedFiles[0]));
//       setGalleryImages([...galleryImages, response.data.image]);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   return (
//     <div className="image-gallery">
//       <div className="image-uploader">
//         <Dropzone onDrop={handleImageUpload} accept="image/*">
//           {({ getRootProps, getInputProps }) => (
//             <div {...getRootProps()} className="dropzone">
//               <input {...getInputProps()} />
//               <p>Drag and drop an image here, or click to select a file</p>
//             </div>
//           )}
//         </Dropzone>
//         {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
//       </div>
//       <div className="image-gallery-container">
//         {galleryImages.map((imageUrl, index) => (
//           <div key={index} className="gallery-card">
//             <img src={imageUrl} alt={`Image ${index}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;
// import React, { useState } from 'react';
// import axios from 'axios';
// import Dropzone from 'react-dropzone';
// import Resizer from 'react-image-file-resizer';
// import styled from 'styled-components';

// const ImageGallery = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [galleryImages, setGalleryImages] = useState([]);

//   const resizeAndUploadImage = async (file) => {
//     return new Promise((resolve, reject) => {
//       Resizer.imageFileResizer(
//         file,
//         570,
//         417,
//         'JPEG',
//         100,
//         0,
//         (uri) => {
//           resolve(uri);
//         },
//         'blob'
//       );
//     });
//   };

//   const handleImageUpload = async (acceptedFiles) => {
//     const resizedImageBlob = await resizeAndUploadImage(acceptedFiles[0]);

//     const formData = new FormData();
//     formData.append('imageFile', resizedImageBlob);

//     try {
//       const response = await axios.post('/api/Image', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setUploadedImage(URL.createObjectURL(acceptedFiles[0]));
//       setGalleryImages([...galleryImages, response.data.image]);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   return (
//     <GalleryContainer>
//       <ImageUploader>
//         <Dropzone onDrop={handleImageUpload} accept="image/*">
//           {({ getRootProps, getInputProps }) => (
//             <DropzoneContainer {...getRootProps()}>
//               <input {...getInputProps()} />
//               <UploadText>Drag and drop an image here, or click to select a file</UploadText>
//             </DropzoneContainer>
//           )}
//         </Dropzone>
//         {uploadedImage && <UploadedPreview src={uploadedImage} alt="Uploaded" />}
//       </ImageUploader>
//       <ImageGalleryContainer>
//         {galleryImages.map((imageUrl, index) => (
//           <GalleryCard key={index}>
//             <GalleryImage src={imageUrl} alt={`Image ${index}`} />
//           </GalleryCard>
//         ))}
//       </ImageGalleryContainer>
//     </GalleryContainer>
//   );
// };

// const GalleryContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 2rem;
// `;

// const ImageUploader = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const DropzoneContainer = styled.div`
//   background-color: #f0f0f0;
//   border: 2px dashed #aaaaaa;
//   padding: 1rem;
//   border-radius: 0.5rem;
//   cursor: pointer;
// `;

// const UploadText = styled.p`
//   font-size: 1rem;
//   color: #333333;
// `;

// const UploadedPreview = styled.img`
//   margin-top: 1rem;
//   max-width: 100%;
// `;

// const ImageGalleryContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 1rem;
// `;

// const GalleryCard = styled.div`
//   border: 1px solid #dddddd;
//   border-radius: 0.5rem;
//   overflow: hidden;
// `;

// const GalleryImage = styled.img`
//   max-width: 100%;
//   height: auto;
// `;

// export default ImageGallery;

// ImageGallery.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import './ImageGallery.css';
import UploadedImage from '../uploadedimage';

const ImageGallery = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleImageUpload = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('imageFile', acceptedFiles[0]);

    try {
      const response = await axios.post('https://localhost:7222/api/Image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedImages([...uploadedImages, URL.createObjectURL(acceptedFiles[0])]);
      setGalleryImages([...galleryImages, response.data.image]);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="image-gallery">
      <div className="image-uploader">
        <Dropzone onDrop={handleImageUpload} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag and drop an image here, or click to select a file</p>
            </div>
          )}
        </Dropzone>
        <div className="uploaded-images">
          {uploadedImages.map((imageUrl, index) => (
            <UploadedImage key={index} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
      <div className="image-gallery-container">
        {galleryImages.map((imageUrl, index) => (
          <div key={index} className="gallery-card">
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
