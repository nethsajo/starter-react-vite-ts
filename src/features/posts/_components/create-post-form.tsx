import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Plus } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useCreatePostMutation } from '../_hooks/query/use-create-post-mutation';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const createPostSchema = z.object({
  title: z.string().trim().min(1, 'Title is required'),
  body: z.string().trim().min(1, 'Body is required'),
  userId: z.coerce.number().int('User ID must be a whole number').min(1, 'User ID is required'),
});

type CreatePostFormValues = z.infer<typeof createPostSchema>;

const defaultValues: CreatePostFormValues = {
  title: '',
  body: '',
  userId: 1,
};

export function CreatePostForm() {
  const form = useForm<CreatePostFormValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues,
  });

  const { mutate: createPost, isPending } = useCreatePostMutation({
    onSuccess: post => {
      toast.success(`Created post #${post.id}`);
      form.reset(defaultValues);
    },
    onError: error => {
      toast.error(error.message || 'Unable to create post');
    },
  });

  const onSubmit = (data: CreatePostFormValues) => {
    createPost(data);
  };

  return (
    <section
      aria-labelledby="create-post-heading"
      className="rounded-md border border-border bg-card p-3 shadow-xs md:p-4 lg:p-6"
    >
      <form className="space-y-4 md:space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-5">
          <FieldSet className="gap-2">
            <FieldLegend id="create-post-heading" className="mb-0 text-lg font-semibold">
              Create post
            </FieldLegend>
            <FieldDescription>POST /posts</FieldDescription>
          </FieldSet>

          <FieldSet className="gap-4">
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`post-${field.name}`}>Title</FieldLabel>
                  <Input
                    {...field}
                    id={`post-${field.name}`}
                    disabled={isPending}
                    aria-invalid={fieldState.invalid}
                    placeholder="Post title"
                    autoComplete="off"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="body"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`post-${field.name}`}>Body</FieldLabel>
                  <Textarea
                    {...field}
                    id={`post-${field.name}`}
                    disabled={isPending}
                    aria-invalid={fieldState.invalid}
                    placeholder="Post body"
                    className="min-h-28 resize-y"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="userId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`post-${field.name}`}>User ID</FieldLabel>
                  <Input
                    {...field}
                    id={`post-${field.name}`}
                    type="number"
                    min={1}
                    disabled={isPending}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldSet>
        </FieldGroup>

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? (
            <Loader2 aria-hidden className="size-4 animate-spin" />
          ) : (
            <Plus aria-hidden className="size-4" />
          )}
          Create post
        </Button>
      </form>
    </section>
  );
}
