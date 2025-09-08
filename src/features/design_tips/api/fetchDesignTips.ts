import { endpoint } from '@/config';
import axios from 'axios';

export const fetchDesignTips = async () => {
  const res = await axios.get(`${endpoint}/design_tips`);
  return res.data;
};
