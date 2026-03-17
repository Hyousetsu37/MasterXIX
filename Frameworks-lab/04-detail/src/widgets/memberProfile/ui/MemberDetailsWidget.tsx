import { getSingleMember } from '@entities/member/api/getSingleMember';
import type { MemberDetailEntity } from '@entities/member/model/type';
import { MemberDetailCard } from '@entities/member/ui/MemberDetailCard';
import { Alert, Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

interface MemberDetailsProps {
  id: string | undefined;
}

export const MemberDetailsWidget = ({ id }: MemberDetailsProps) => {
  const [member, setMember] = useState<MemberDetailEntity | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        if (id) {
          const memberInfo = await getSingleMember(id);
          setMember(memberInfo);
        }
      } catch (error) {
        console.error('Failed to fetch member', error);
        setMember(null);
      } finally {
        setIsLoading(false);
      }
    };
    asyncFunc();
  }, [id]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!member || !id) {
    return (
      <Box sx={{ p: 4, maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <Alert severity="warning" sx={{ mb: 3 }}>
          User not found or failed to load
        </Alert>
      </Box>
    );
  }
  return <MemberDetailCard {...member} />;
};
