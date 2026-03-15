import { useSessionModel } from '@entities/session/model/sessionContext';
import { Button } from '@shared/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import style from './LogoutButton.module.css';

export const LogoutButton = () => {
  const { logout } = useSessionModel();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <Button className={style.logoutButton} onClick={handleLogout}>
      Cerrar sesion
    </Button>
  );
};
