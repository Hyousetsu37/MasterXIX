import type { InputHTMLAttributes } from 'react';
import style from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className={style.container}>
      {label && (
        <label className={style.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={style.input} type="text" id={id} {...props} />
    </div>
  );
};
