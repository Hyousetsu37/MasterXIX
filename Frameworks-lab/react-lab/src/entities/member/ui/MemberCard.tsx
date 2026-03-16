import { generatePath, Link } from 'react-router-dom';
import type { Member } from '../model/types';
import styles from './MemberCard.module.css';

interface MemberCardProps {
  member: Member;
}

export const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <Link
      to={generatePath('/member/:username', { username: member.login })}
      className={styles.cardLink}
    >
      <article className={styles.card}>
        <img
          src={member.avatar_url}
          alt={`Avatar del usuario ${member.login}`}
          className={styles.avatar}
          loading="lazy"
        />
        <h3 className={styles.username}>{member.login}</h3>
        <span className={styles.viewProfile}>Ver perfil</span>
      </article>
    </Link>
  );
};
