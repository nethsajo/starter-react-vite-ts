import { Cancel01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { validations } from '@/utils/password-validations';

type PasswordIndicatorProps = {
  password: string;
  className?: string;
};

export function PasswordValidationIndicator({ password, className }: PasswordIndicatorProps) {
  const strength = validations.map(validation => ({
    met: validation.validate(password),
    text: validation.label,
  }));

  const strengthScore = useMemo(() => {
    return strength.filter(requirement => requirement.met).length;
  }, [strength]);

  console.log(strength, strengthScore);

  const getColor = (score: number) => {
    if (score === 0) return 'bg-border';
    if (score <= 1) return 'bg-destructive';
    if (score <= 2) return 'bg-orange-500 ';
    if (score <= 3) return 'bg-amber-500';
    if (score === 4) return 'bg-yellow-400';

    return 'bg-green-500';
  };

  const getText = (score: number) => {
    if (score === 0) return 'Enter a password';
    if (score <= 2) return 'Weak password';
    if (score <= 3) return 'Medium password';
    if (score === 4) return 'Strong password';

    return 'Very strong password';
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <div className="mb-4 flex h-1 w-full gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              'h-full flex-1 rounded-full transition-all duration-500 ease-out',
              index < strengthScore ? getColor(strengthScore) : 'bg-border'
            )}
          />
        ))}
      </div>
      <p className="mb-2 text-sm font-medium text-foreground">
        {getText(strengthScore)}. Password requirements:
      </p>
      <ul className="flex flex-col gap-1.5">
        {validations.map(({ label, validate }, index) => {
          const validated = validate(password);

          return (
            <li
              key={index}
              className={cn(
                'flex items-center gap-2 text-sm transition-colors',
                validated ? 'text-green-600' : 'text-muted-foreground'
              )}
            >
              {validated ? (
                <HugeiconsIcon icon={Tick02Icon} className="size-4" />
              ) : (
                <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
              )}
              <span className={cn(validated && 'font-medium')}>{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
