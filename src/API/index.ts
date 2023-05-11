import axios from 'axios';

export const getNews = async (region: string, pageNumber: number) => {
  return await axios.get(
    'http://localhost:5000/news',
  );
};
