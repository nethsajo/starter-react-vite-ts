import { useMutation, useQueryClient, type MutationOptions } from '@tanstack/react-query';
import {
  createPostData,
  type CreatePostDataArgs,
  type CreatePostDataResponse,
  type GetPostsDataResponse,
} from '@/data';

export type UseCreatePostMutationArgs = MutationOptions<
  CreatePostDataResponse,
  Error,
  CreatePostDataArgs,
  unknown
>;

export function useCreatePostMutation(args: UseCreatePostMutationArgs = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    ...args,
    mutationFn: createPostData,
    onSuccess: (data, variables, context, mutation) => {
      queryClient.setQueryData<GetPostsDataResponse>(['/posts'], currentPosts => [
        data,
        ...(currentPosts ?? []),
      ]);
      args.onSuccess?.(data, variables, context, mutation);
    },
    onError: (error, variables, context, mutation) => {
      if (args?.onError) return args.onError(error, variables, context, mutation);
    },
  });
}
