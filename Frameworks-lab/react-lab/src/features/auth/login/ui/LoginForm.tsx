import { useSessionModel } from '@entities/session/model/sessionContext';
import { Button } from '@shared/ui/button/Button';
import { ErrorDisplay } from '@shared/ui/error-display/ErrorDisplay';
import { Input } from '@shared/ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './LoginForm.module.css';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading, error } = useSessionModel();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({ username, password });
      navigate('/organization', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2 className={style.title}>Iniciar Sesion</h2>
      <Input
        label="Usuario:"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        disabled={isLoading}
      />
      <Input
        label="Contraseña:"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        disabled={isLoading}
      />
      {error && <ErrorDisplay errorMessage={error} />}
      <div className={style.buttonWrapper}>
        <Button
          type="submit"
          disabled={isLoading || !username.trim() || !password.trim()}
        >
          Entrar
        </Button>
      </div>
    </form>
  );
};
