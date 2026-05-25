type Validations = {
  label: string;
  validate: (value: string) => boolean;
};

export const validations: Validations[] = [
  {
    label: 'At least 8 characters long',
    validate: value => value.length >= 8,
  },
  {
    label: 'Contains lowercase letter',
    validate: value => /[a-z]/.test(value),
  },
  {
    label: 'Contains uppercase letter',
    validate: value => /[A-Z]/.test(value),
  },
  {
    label: 'Contains special character',
    validate: value => /[^A-Za-z0-9]/.test(value),
  },
  {
    label: 'Contains number',
    validate: value => /\d/.test(value),
  },
  {
    label: 'Maximum 16 characters',
    validate: value => value.length <= 16,
  },
];
