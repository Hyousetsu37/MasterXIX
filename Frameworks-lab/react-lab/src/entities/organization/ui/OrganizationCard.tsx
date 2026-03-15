import styles from './OrganizationCard.module.css';

interface OrganizationCardProps {
  organizationName: string;
}

export const OrganizationCard = ({
  organizationName,
}: OrganizationCardProps) => {
  const logoUrl = `https:github.com/${organizationName}.png`;
  return (
    <div className={styles.card}>
      <img
        src={logoUrl}
        alt={`Logo de ${organizationName}`}
        className={styles.logo}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://github.com/ghost.png';
        }}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{organizationName.toUpperCase()}</h2>
        <a
          href={`https://github.com/${organizationName}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver en Github
        </a>
      </div>
    </div>
  );
};
