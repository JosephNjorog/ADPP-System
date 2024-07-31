import api from '../utils/api';

const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

const register = async (username, email, password) => {
  const response = await api.post('/auth/register', { username, email, password });
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

export { login, register, logout };
export default { login, register, logout };
