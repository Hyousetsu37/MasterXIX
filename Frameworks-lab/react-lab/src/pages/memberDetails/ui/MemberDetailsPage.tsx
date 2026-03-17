import { useNavigate, useParams } from 'react-router-dom';
import styles from './MemberDetailsPage.module.css';
import { useEffect, useState } from 'react';
import { useMemberModel } from '@entities/member/model/memberContext';
import type { Member } from '@entities/member/model/types';
import { Button } from '@shared/ui/button/Button';

export const MemberDetailsPage = () => {
  const { username } = useParams<{ username: string }>();
  const { getUserFromCacheOrApi, isLoading, error } = useMemberModel();
  const [member, setMember] = useState<Member | null>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemberInfo = async () => {
      if (username) {
        const tempUsername: Member | null =
          await getUserFromCacheOrApi(username);
        setMember(tempUsername);
      }
    };
    fetchMemberInfo();
  }, [username, getUserFromCacheOrApi]);

  if (isLoading && !member) {
    return (
      <div className={styles.pageContainer}>
        <p className={styles.loadingText}>Buscando perfil de {username}...</p>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.errorCard}>
          <h2>Oops!</h2>
          <p>{error || 'No se encontró el usuario solicitado.'}</p>
          <Button onClick={() => navigate('/organization')}>
            Volver a buscar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <Button
        type="button"
        onClick={() => navigate(-1)}
        className={styles.backButton}
      >
        Volver a la lista
      </Button>

      <main className={styles.profileCard}>
        <div className={styles.headerBackground}></div>

        <img
          src={member.avatar_url}
          alt={`Avatar de ${member.login}`}
          className={styles.avatar}
        />

        <div className={styles.infoSection}>
          <h1 className={styles.name}>{member.login}</h1>

          <div className={styles.stats}>
            <span className={styles.badge}>ID: {member.id}</span>
            {/* Si tu API de detalle trae más datos (followers, repos), irían aquí */}
          </div>

          <a
            href={`https://github.com/${member.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Ver perfil completo en GitHub
          </a>
        </div>
      </main>
    </div>
  );
};
