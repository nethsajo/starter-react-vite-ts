import { useMutation, useQueryClient, type MutationOptions } from '@tanstack/react-query';
import { createSampleData, type CreateSampleDataArgs } from '../../_data/create-sample';

export type UseCreateSampleMutationArgs = MutationOptions<
  Awaited<ReturnType<typeof createSampleData>>,
  Error,
  CreateSampleDataArgs | undefined,
  unknown
>;

export function useCreateSampleMutation(args: UseCreateSampleMutationArgs = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSampleData,
    onSuccess: (data, params, context, mutation) => {
      queryClient.invalidateQueries({ queryKey: ['/samples'] });
      if (args?.onSuccess) return args.onSuccess(data, params, context, mutation);
    },
    onError: (error, variables, context, mutation) => {
      if (args?.onError) return args.onError(error, variables, context, mutation);
    },
  });
}
