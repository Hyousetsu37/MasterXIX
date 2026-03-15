import type { ButtonHTMLAttributes, ReactNode } from 'react';
import style from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button className={style.button} disabled={isDisabled} {...props}>
      {isLoading ? 'Cargando...' : children}
    </button>
  );
};
