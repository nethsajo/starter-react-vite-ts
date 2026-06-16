import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getPostsData, type GetPostsDataResponse } from '@/data';

export type UsePostsQueryArgs = Omit<
  UseQueryOptions<GetPostsDataResponse, Error>,
  'queryKey' | 'queryFn'
>;

export function usePostsQuery(args: UsePostsQueryArgs = {}) {
  return useQuery({
    ...args,
    queryKey: ['/posts'],
    queryFn: getPostsData,
  });
}
