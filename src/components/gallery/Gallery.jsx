import { useState } from "react";
import UploadForm from "../UploadForm";
import Hero from "../Hero";
import GalleryGrid from "../GalleryGrid";
import Modal from "../Modal";
import Search from "../Search";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <Hero />
      {/* <Search /> */}
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
