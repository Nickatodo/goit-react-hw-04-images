import React, { useEffect } from 'react';

export default function Modal({ image, closeModal }) {
  function backdropClick(evt) {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  }

  useEffect(() => {
    function pressKey(evt) {
      if (evt.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', pressKey);
    return () => {
      document.removeEventListener('keydown', pressKey);
    };
  }, [closeModal]);

  return (
    <div className="Overlay" onClick={backdropClick}>
      <div className="Modal">
        <img src={image.largeImageURL} alt="desc" />
      </div>
    </div>
  );
}
