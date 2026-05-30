import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
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
import { useLayoutsContext } from '@/contexts/layouts';
import { emailSchema } from '@/utils/zod-schemas';

export const Route = createFileRoute('/forgot-password/')({
  component: ForgotPasswordPage,
});

export const forgotPasswordSchema = z.object({ email: emailSchema });

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

function ForgotPasswordPage() {
  const { setHideNavbar, setHideFooter } = useLayoutsContext();

  // const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordSchema> = async data => {
    console.log(data);
  };

  const handleSubmit = form.handleSubmit(onSubmit);

  useEffect(() => {
    setHideNavbar(true);
    setHideFooter(true);

    return () => {
      setHideNavbar(false);
      setHideFooter(false);
    };
  }, [setHideNavbar, setHideFooter]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-8">
      <div className="w-full sm:max-w-md">
        <form id="forgot-password" onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="text-center font-bold data-[variant=legend]:text-3xl">
                Reset Password
              </FieldLegend>
              <FieldDescription className="text-center">
                Enter your email address and we will send a code to reset your password
              </FieldDescription>
              {/* {isError && (
                <Alert variant="destructive">
                  <AlertDescription>
                    {error?.message || 'Failed to send reset link. Please try again.'}
                  </AlertDescription>
                </Alert>
              )} */}
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`forgot-password-${field.name}`}>Email</FieldLabel>
                      <Input
                        {...field}
                        id={`forgot-password-${field.name}`}
                        placeholder="name@example.com"
                        autoComplete="email"
                        aria-invalid={fieldState.invalid}
                        // disabled={isPending}
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>
            <Field orientation="vertical">
              <Button
                size="lg"
                form="forgot-password"
                className="w-full cursor-pointer active:translate-y-1"
                // disabled={isPending}
              >
                Send reset link
                {/* {isPending ? 'Sending reset link...' : 'Send reset link'} */}
              </Button>
            </Field>
            <Field orientation="vertical">
              <div className="text-center text-sm text-muted-foreground">
                Remember your password?{' '}
                <Link
                  to="/login"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
