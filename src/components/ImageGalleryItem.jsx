import React, { useState } from 'react';
import Modal from './Modal';

export default function ImageGalleryItem({ galleryPhotos }) {
  const [imgSelected, setImgSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(photo) {
    setImgSelected(photo);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {galleryPhotos.map(photo => (
        <li className="ImageGalleryItem" id={photo.id} key={photo.id}>
          <img
            className="ImageGalleryItem-image"
            src={photo.webformatURL}
            alt="desc"
            onClick={() => openModal(photo)}
          />
        </li>
      ))}
      {isModalOpen && imgSelected && (
        <Modal image={imgSelected} closeModal={closeModal} />
      )}
    </>
  );
}
