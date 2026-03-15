import style from './ErrorDisplay.module.css';

interface ErrorDisplayProps {
  errorMessage: string;
}

export const ErrorDisplay = ({ errorMessage }: ErrorDisplayProps) => {
  return <div className={style.Error}>{errorMessage}</div>;
};
