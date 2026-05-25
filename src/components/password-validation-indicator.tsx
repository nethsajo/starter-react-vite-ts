import { cn } from '@/lib/utils';
import { validations } from '@/utils/password-validations';
import { Cancel01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

type PasswordIndicatorProps = {
  password: string;
  className: string;
};

export function PasswordValidationIndicator({ password, className }: PasswordIndicatorProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <p className="text-muted-foreground text-sm font-medium">Password requirements:</p>
      <ul className="flex flex-col gap-1">
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
