import axios from 'axios';
import { DEFAULT_URL } from '../constant';
import { useQuery } from '@tanstack/react-query';
import { TimeType } from '../components/Admin/ChangeTime';
import { HoldingData } from '../type';

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
    refetchOnMount: true,
    refetchOnReconnect: true,
  });
};

const getTimeApi = async ({ params }: { params: { id?: number } }) => {
  const { data } = await defaultInstance.get(`/api/Coin/time?id=${params?.id}`);
  return data as TimeType[];
};

export const useGetTimeQuery = ({ params }: { params: { id?: number } }) => {
  return useQuery([`time`], () => getTimeApi({ params }), {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    enabled: !!params.id,
  });
};

const getHoldingApi = async ({ params }: { params: { id?: number } }) => {
  const { data } = await defaultInstance.get(
    `/api/Coin/holdings/${params?.id}`
  );
  return data as HoldingData;
};

export const useGetHoldingQuery = ({ params }: { params: { id?: number } }) => {
  return useQuery([`holding`], () => getHoldingApi({ params }), {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    enabled: !!params.id,
  });
};
