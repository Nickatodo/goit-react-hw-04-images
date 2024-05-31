import React from 'react';

export default function Button({ onMore }) {
  return (
    <button type="button" className="Button" onClick={onMore}>
      <span>Load More</span>
    </button>
  );
}
