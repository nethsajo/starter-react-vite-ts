import { STAGES } from '@/constants/env';
import { envConfig } from '@/env';
import z from 'zod';

export const emailSchema = z
  .string()
  .trim()
  .email()
  .toLowerCase()
  .refine(email => {
    const isProduction = envConfig.STAGE === STAGES.Prod;
    const isStaging = envConfig.STAGE === STAGES.Staging;
    const isProductionOrStaging = isProduction || isStaging;

    if (email.includes('+') && isProductionOrStaging) return false;

    const [local] = email.split('@');

    if (local?.startsWith('.') || local?.endsWith('.')) return false;

    if (local?.includes('..')) return false;

    return true;
  }, 'Email address contains invalid characters or patterns');

const passwordValidationMessages = [
  'Password must be at least 8 characters long',
  'Password must have 1 lowercase',
  'Password must have 1 uppercase ',
  'Password must have 1 special character, and 1 number',
  'Password should not exceed 16 characters',
];

export const passwordSchema = z.string().refine(
  value => {
    const minLength = value.length >= 8;
    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(value);
    const hasNumber = /\d/.test(value);
    const maxLength = value.length <= 16;

    return minLength && hasLowercase && hasUppercase && hasSpecialChar && hasNumber && maxLength;
  },
  {
    message: passwordValidationMessages.join('\n'),
  }
);

export const firstNameSchema = z
  .string()
  .trim()
  .min(2, 'First name must be at least 2 characters')
  .max(50, 'First name must not exceed 50 characters')
  .refine(
    value => /^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(value),
    'First name can only contain letters and single spaces between words'
  )
  .refine(
    value => !value.startsWith(' ') && !value.endsWith(' '),
    'First name cannot start or end with a space'
  )
  .refine(value => !/\s{2,}/.test(value), 'First name cannot contain consecutive spaces');

export const lastNameSchema = z
  .string()
  .trim()
  .min(2, 'Last name must be at least 2 characters')
  .max(50, 'Last name must not exceed 50 characters')
  .refine(
    e => /^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(e),
    'Last name can only contain letters and single spaces between words'
  )
  .refine(
    value => !value.startsWith(' ') && !value.endsWith(' '),
    'Last name cannot start or end with a space'
  )
  .refine(value => !/\s{2,}/.test(value), 'Last name cannot contain consecutive spaces');
