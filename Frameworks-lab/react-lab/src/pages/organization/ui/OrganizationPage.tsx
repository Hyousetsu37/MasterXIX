import { useMemberModel } from '@entities/member/model/memberContext';
import { OrganizationCard } from '@entities/organization/ui/OrganizationCard';
import { SearchOrganization } from '@features/searchOrganization/ui/SearchOrganization';
import styles from './OrganizationPage.module.css';

export const OrganizationPage = () => {
  const { currentOrg } = useMemberModel();
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1>Organizaciones</h1>
      </header>
      <section className={styles.searchSection}>
        <SearchOrganization />
      </section>
      {currentOrg && (
        <section className={styles.orgInfoSection}>
          <OrganizationCard organizationName={currentOrg} />
        </section>
      )}

      <section className={styles.listSection}>
        <p>List</p>
      </section>
    </div>
  );
};
