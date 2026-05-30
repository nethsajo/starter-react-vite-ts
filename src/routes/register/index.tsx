import { PasswordValidationIndicator } from '@/components/password-validation-indicator';
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { useLayoutsContext } from '@/contexts/layouts';
import { emailSchema, firstNameSchema, lastNameSchema, passwordSchema } from '@/utils/zod-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
});

export const registerSchema = z
  .object({
    email: emailSchema,
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    password: passwordSchema.transform(password => password.trim()),
    confirmPassword: z.string().trim().min(1, 'Please confirm your password'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match. Please make sure both passwords are identical.',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

function RouteComponent() {
  const { setHideNavbar, setHideFooter } = useLayoutsContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = form.watch('password', '');
  const confirmPassword = form.watch('confirmPassword', '');
  const isPasswordValid =
    password.length >= 8 &&
    password.length <= 16 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    /\d/.test(password);

  const onSubmit: SubmitHandler<RegisterSchema> = async data => {
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
        <form id="register" onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="font-bold text-center data-[variant=legend]:text-3xl">
                Create account
              </FieldLegend>
              <FieldDescription className="text-center">
                Enter your information below to create your account and get started
              </FieldDescription>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <div className="grid gap-7 sm:grid-cols-2">
                  <Controller
                    name="firstName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={`register-${field.name}`}>First Name</FieldLabel>
                        <Input
                          {...field}
                          id={`register-${field.name}`}
                          placeholder="John"
                          autoComplete="given-name"
                          aria-invalid={fieldState.invalid}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="lastName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={`register-${field.name}`}>Last Name</FieldLabel>
                        <Input
                          {...field}
                          id={`register-${field.name}`}
                          placeholder="Doe"
                          autoComplete="family-name"
                          aria-invalid={fieldState.invalid}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                </div>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`register-${field.name}`}>Email</FieldLabel>
                      <Input
                        {...field}
                        id={`register-${field.name}`}
                        placeholder="john@example.com"
                        autoComplete="email"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`register-${field.name}`}>Password</FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          {...field}
                          id={`register-${field.name}`}
                          type={showPassword ? 'text' : 'password'}
                          aria-invalid={fieldState.invalid}
                          placeholder="Create a password"
                          autoComplete="new-password"
                          onFocus={() => setIsPasswordFocused(true)}
                          onBlur={() => {
                            field.onBlur();
                            setIsPasswordFocused(false);
                          }}
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            aria-label={`${!showPassword ? 'Show' : 'Hide'} password`}
                            title={`${!showPassword ? 'Show' : 'Hide'} password`}
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
                      {!isPasswordFocused && fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} className="whitespace-pre-line" />
                      )}
                      {password && !isPasswordValid && isPasswordFocused && (
                        <PasswordValidationIndicator password={password} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="confirmPassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={`register-${field.name}`}>Confirm Password</FieldLabel>
                      <InputGroup>
                        <InputGroupInput
                          {...field}
                          id={`register-${field.name}`}
                          type={showConfirmPassword ? 'text' : 'password'}
                          aria-invalid={fieldState.invalid}
                          placeholder="Confirm your password"
                          autoComplete="new-password"
                          // disabled={isPending}
                          onFocus={() => setIsConfirmPasswordFocused(true)}
                          onBlur={() => {
                            field.onBlur();
                            setIsConfirmPasswordFocused(false);
                          }}
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            aria-label={`${!showConfirmPassword ? 'Show' : 'Hide'} confirm password`}
                            title={`${!showConfirmPassword ? 'Show' : 'Hide'} confirm password`}
                            size="icon-xs"
                            onClick={() => setShowConfirmPassword(show => !show)}
                          >
                            {!showConfirmPassword ? (
                              <HugeiconsIcon icon={ViewIcon} className="size-5" />
                            ) : (
                              <HugeiconsIcon icon={ViewOffSlashIcon} className="size-5" />
                            )}
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                      {!isConfirmPasswordFocused && fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} className="whitespace-pre-line" />
                      )}
                      {confirmPassword &&
                        password &&
                        confirmPassword !== password &&
                        isConfirmPasswordFocused && (
                          <FieldDescription className="text-amber-600">
                            Passwords do not match
                          </FieldDescription>
                        )}
                      {confirmPassword &&
                        password &&
                        confirmPassword === password &&
                        isConfirmPasswordFocused && (
                          <FieldDescription className="text-green-600">
                            Passwords match ✓
                          </FieldDescription>
                        )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>
            <Field orientation="vertical">
              <Button
                size="lg"
                form="register"
                className="w-full cursor-pointer active:translate-y-1"
                // disabled={isPending}
              >
                Create account
                {/* {isPending ? 'Creating your account...' : 'Create account'} */}
              </Button>
            </Field>
            <Field orientation="vertical">
              <div className="text-muted-foreground text-center text-sm">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-primary font-medium underline-offset-4 hover:underline"
                >
                  Sign in
                </Link>{' '}
              </div>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
