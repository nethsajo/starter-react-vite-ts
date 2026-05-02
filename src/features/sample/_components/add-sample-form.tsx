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
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useCreateSampleMutation } from '../_hooks/query/use-create-sample-mutation';

export const addSampleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

export type AddSample = z.infer<typeof addSampleSchema>;

export const AddSampleForm = () => {
  const form = useForm<AddSample>({
    resolver: zodResolver(addSampleSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const { mutate: createSampleMutate, isPending } = useCreateSampleMutation();

  const onSubmit = async (data: AddSample) => {
    createSampleMutate({
      title: data.title,
      body: data.description,
      userId: 1,
    });
  };

  return (
    <div className="border-border bg-card overflow-hidden rounded-lg border">
      <div className="border-border bg-muted flex items-center gap-2 border-b px-4 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="text-muted-foreground ml-2 font-mono text-xs">create-sample.tsx</span>
      </div>
      <div className="p-6">
        <form id="create-sample" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="font-semibold">Add New Sample</FieldLegend>
              <FieldDescription>Create a new record in the database.</FieldDescription>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`sample-${field.name}`}>Title</FieldLabel>
                      <Input
                        {...field}
                        id={`sample-${field.name}`}
                        disabled={isPending}
                        aria-invalid={fieldState.invalid}
                        placeholder="john@example.com or username"
                        autoComplete="off"
                        className="h-9 rounded-md"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`sample-${field.name}`}>Description</FieldLabel>
                      <Input
                        {...field}
                        id={`sample-${field.name}`}
                        disabled={isPending}
                        aria-invalid={fieldState.invalid}
                        placeholder="john@example.com or username"
                        autoComplete="off"
                        className="h-9 rounded-md"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};
