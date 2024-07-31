import api from '../utils/api';

export const uploadData = async (data) => {
  const response = await api.post('/data', data);
  return response.data;
};

export const getData = async (params) => {
  const response = await api.get('/data', { params });
  return response.data;
};

export const getDataByLocation = async (location) => {
  const response = await api.get(`/data/${location}`);
  return response.data;
};