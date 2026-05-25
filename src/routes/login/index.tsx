import { Button } from '@/components/ui/button';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { useLayoutsContext } from '@/contexts/layouts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail01Icon, ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const Route = createFileRoute('/login/')({
  component: LoginPage,
});

export const loginSchema = z.object({
  emailOrUsername: z.string().min(1, 'Please enter your email or username'),
  password: z.string().min(1, 'Please enter your password'),
});

export type LoginSchema = z.infer<typeof loginSchema>;

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { setHideNavbar, setHideFooter } = useLayoutsContext();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: '',
      password: '',
    },
  });

  const onError = (errors: typeof form.formState.errors) => {
    const emailOrUsernameError = errors.emailOrUsername?.message;
    const passwordError = errors.password?.message;
    toast.error(emailOrUsernameError || passwordError);
  };

  const onSubmit: SubmitHandler<LoginSchema> = async data => {
    const isEmail = data.emailOrUsername.includes('@');
    const key = isEmail ? 'email' : 'username';

    console.log(key);

    // mutate({
    //   requestBody: {
    //     [key]: data.emailOrUsername.trim().toLowerCase(),
    //     password: data.password,
    //   },
    // });
  };

  const handleSubmit = form.handleSubmit(onSubmit, onError);

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
        <form id="login" onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="mb-3 text-center font-bold data-[variant=legend]:text-3xl">
                Login
              </FieldLegend>
              <FieldDescription className="text-center">
                Enter your credentials to continue to your account
              </FieldDescription>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Controller
                  name="emailOrUsername"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`login-${field.name}`}>Email or Username</FieldLabel>
                      <Input
                        {...field}
                        id={`login-${field.name}`}
                        disabled={false}
                        aria-invalid={fieldState.invalid}
                        placeholder="john@example.com or username"
                        autoComplete="off"
                      />
                    </Field>
                  )}
                />
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldContent className="flex-row">
                        <FieldLabel className="flex-1" htmlFor={`login-${field.name}`}>
                          Password
                        </FieldLabel>
                        <Link
                          to="/forgot-password"
                          className="text-primary text-sm underline-offset-4 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </FieldContent>
                      <InputGroup>
                        <InputGroupInput
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                          id={`login-${field.name}`}
                          disabled={false}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your password"
                          autoComplete="off"
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            aria-label={!showPassword ? 'Show password' : 'Hide password'}
                            title={!showPassword ? 'Show password' : 'Hide password'}
                            size="icon-xs"
                            onClick={() => setShowPassword(show => !show)}
                          >
                            {!showPassword ? (
                              <HugeiconsIcon icon={ViewIcon} className="size-5" />
                            ) : (
                              <HugeiconsIcon icon={ViewOffSlashIcon} className="size-5" />
                            )}
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>
            <Field orientation="vertical">
              <Button
                size="lg"
                form="login"
                className="w-full cursor-pointer active:translate-y-1"
                disabled={false}
              >
                Login
                {/* {false ? 'Logging in...' : 'Login'} */}
              </Button>
              <div className="my-4 flex items-center">
                <FieldSeparator className="flex-1" />
                <span aria-hidden className="text-muted-foreground px-3 text-sm font-medium">
                  OR
                </span>
                <FieldSeparator className="flex-1" />
              </div>
              <Button
                size="lg"
                type="button"
                variant="outline"
                className="cursor-pointer border-dashed"
                disabled={!form.getValues('emailOrUsername')}
              >
                <HugeiconsIcon icon={Mail01Icon} className="size-5" /> Send login link to email
              </Button>
            </Field>
            <Field orientation="vertical">
              <div className="text-muted-foreground text-center text-sm">
                Don&lsquo;t have an account?{' '}
                <Link
                  to="/register"
                  className="text-primary font-medium underline-offset-4 hover:underline"
                >
                  Sign up here for free
                </Link>{' '}
              </div>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
