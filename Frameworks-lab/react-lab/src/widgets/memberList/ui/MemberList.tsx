import { useMemberModel } from '@entities/member/model/memberContext';
import styles from './MemberList.module.css';
import { MemberCard } from '@entities/member';

export const MemberList = () => {
  const { members, isLoading } = useMemberModel();

  if (isLoading) {
    return (
      <div className={styles.statusContainer}>
        <p className={styles.loadingText}>
          Cargando miembros de la organizacion...
        </p>
      </div>
    );
  }

  if (!members || members.length === 0) {
    return null;
  }

  return (
    <div className={styles.grid}>
      {members.map((member) => (
        <MemberCard member={member} key={member.id} />
      ))}
    </div>
  );
};
