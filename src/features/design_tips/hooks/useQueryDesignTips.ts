import { useQuery } from '@tanstack/react-query';
import type { DesignTip } from '../types';
import { fetchDesignTips } from '../api/fetchDesignTips';

export const useQueryDesignTips = () => {
  return useQuery<DesignTip[], Error>({
    queryKey: ['designTips'],
    queryFn: fetchDesignTips,
  });
};
