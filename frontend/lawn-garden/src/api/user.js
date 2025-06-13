// 전체 유저 조회 api
import axios from './axios';

export const getAllUsers = async () => {
  return await axios.get('/api/v1/users');
};
