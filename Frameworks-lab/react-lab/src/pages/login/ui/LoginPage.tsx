import { LoginForm } from '@features/auth/login/ui/LoginForm';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <main className={styles.pageContainer}>
      <section className={styles.formCard}>
        <LoginForm />
      </section>
    </main>
  );
};
