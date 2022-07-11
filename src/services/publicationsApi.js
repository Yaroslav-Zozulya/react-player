import axios from 'axios';

axios.defaults.baseURL = 'https://62c6daff2b03e73a58d8d362.mockapi.io';

export const getPublications = async () => {
  const response = await axios.get('/publication');
  return response.data;
};

export const addPublication = async data => {
  const response = await axios.post('/publication', data);
  return response.data;
};
export const deletePublication = async id => {
  const response = await axios.delete(`/publication/${id}`);
  return response.data;
};
