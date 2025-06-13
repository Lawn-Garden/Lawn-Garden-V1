import axios from 'axios';
import { useAuthStore } from '@/store/authStore';

const Axios = axios.create({
    baseURL: 'http://43.201.157.40:8082/',
    // withCredentials: true, 없어도된다!!
    // headers: {
    //     'Authorization': 'Bearer API_TOKEN',
    // },
})

// 서버 요청 직전 작업 - 인터셉터
Axios.interceptors.request.use(
    (config) => {
      const token = useAuthStore.getState().accessToken;
    //   console.log('🔑 토큰:', token);
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

export default Axios;