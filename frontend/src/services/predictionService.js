import axios from 'axios';

const getPredictions = async () => {
  const response = await axios.get('/api/predictions');
  return response.data;
};

const createPrediction = async (predictionData) => {
  const response = await axios.post('/api/predictions', predictionData);
  return response.data;
};

export { getPredictions, createPrediction };
export default { getPredictions, createPrediction };
