import React from 'react';
import { Circles } from 'react-loader-spinner';

export default function Loader({ loading }) {
  if (loading !== false) {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{ display: 'block', textAlign: 'center' }}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
