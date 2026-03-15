import { useSessionModel } from '@entities/session/model/sessionContext';
import { LogoutButton } from '@features/auth/logout';
import styles from './Header.module.css';

export const Header = () => {
  const { user } = useSessionModel();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>Miembros de Github</h2>
      </div>
      <div className={styles.userInfo}>
        <span className={styles.greeting}> Hola, {user?.username}</span>
        <LogoutButton />
      </div>
    </header>
  );
};
