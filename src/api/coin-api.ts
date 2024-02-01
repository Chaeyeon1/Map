import axios from 'axios';
import { DEFAULT_URL } from '../constant';
import { useQuery } from 'react-query';

const axiosApi = (url: string, data?: any) => {
  const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    ...data,
  });
  instance.interceptors.request.use(async (config) => {
    return config;
  });
  return instance;
};

export const defaultInstance = axiosApi(`${DEFAULT_URL}`);

const getCoinApi = async () => {
  const { data } = await defaultInstance.get('/api/Coin/coin');
  return data;
};

export const useGetCoinQuery = () => {
  return useQuery([`coin`], () => getCoinApi(), {
    refetchOnWindowFocus: true,
  });
};
