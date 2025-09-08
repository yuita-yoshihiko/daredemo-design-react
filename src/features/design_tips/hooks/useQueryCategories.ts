import { useQuery } from '@tanstack/react-query';
import type { Category } from '../types';
import { fetchCategories } from '../api/fetchCategories';

export const useQueryCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};
