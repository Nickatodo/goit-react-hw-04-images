import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';

export default function ImageGallery({ photos, loadMore }) {
  let galleryPhotos = [...photos];
  return (
    <>
      <ul className="ImageGallery">
        <ImageGalleryItem galleryPhotos={galleryPhotos}></ImageGalleryItem>
      </ul>
      {galleryPhotos.length > 0 && <Button onMore={loadMore}></Button>}
    </>
  );
}
