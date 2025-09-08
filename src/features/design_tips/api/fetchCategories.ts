import { endpoint } from '@/config';
import axios from 'axios';

export const fetchCategories = async () => {
  const res = await axios.get(`${endpoint}/categories`);
  return res.data;
};
