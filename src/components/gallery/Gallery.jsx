import { useState } from "react";
import UploadForm from "../UploadForm";
import Header from "../Header";
import GalleryGrid from "../GalleryGrid";
import Modal from "../Modal";
import Search from "../Search";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <Header />      
      <UploadForm />
      <GalleryGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </>
  );
};

export default Gallery;
