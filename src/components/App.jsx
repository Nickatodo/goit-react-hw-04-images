import axios from 'axios';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import { useState } from 'react';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const API_KEY = '44084395-bf6d64f8582b93ffa0a64f2d9';
  const BASE_URL = 'https://pixabay.com/api/';

  async function searchGallery() {
    setPage(1);
    try {
      setLoading(true);
      let response = await axios.get(`${BASE_URL}`, {
        params: {
          key: API_KEY,
          q: query,
          page: 1,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      let datas = [...response.data.hits];
      let searchPhotos = [];
      for (const data in datas) {
        if (datas.hasOwnProperty.call(datas, data)) {
          const element = datas[data];
          searchPhotos.push({
            id: element.id,
            webformatURL: element.webformatURL,
            largeImageURL: element.largeImageURL,
          });
        }
      }
      await setPhotos(searchPhotos);
    } catch (error) {
      alert('Ocurrio un error');
    } finally {
      setLoading(false);
    }
    return setPage(2);
  }

  async function searchGalleryMore() {
    try {
      setLoading(true);
      let response = await axios.get(`${BASE_URL}`, {
        params: {
          key: API_KEY,
          q: query,
          page: page,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      let datas = [...response.data.hits];
      let searchPhotos = [];
      for (const data in datas) {
        if (datas.hasOwnProperty.call(datas, data)) {
          const element = datas[data];
          searchPhotos.push({
            id: element.id,
            webformatURL: element.webformatURL,
            largeImageURL: element.largeImageURL,
          });
        }
      }
      let oldPhotos = [...photos];
      for (const photo in searchPhotos) {
        if (searchPhotos.hasOwnProperty.call(searchPhotos, photo)) {
          const elemento = searchPhotos[photo];
          oldPhotos.push({
            id: elemento.id,
            webformatURL: elemento.webformatURL,
            largeImageURL: elemento.largeImageURL,
          });
        }
      }
      await setPhotos(oldPhotos);
    } catch (error) {
      alert('Ocurrio un error');
    } finally {
      setLoading(false);
    }
    return setPage(old => old + 1);
  }

  return (
    <>
      <SearchBar onQuery={setQuery} searchGallery={searchGallery} />
      <Loader loading={loading} />
      <ImageGallery photos={photos} loadMore={searchGalleryMore} />
    </>
  );
};
