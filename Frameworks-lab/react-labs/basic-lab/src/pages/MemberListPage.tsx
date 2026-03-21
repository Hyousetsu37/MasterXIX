import { SearchOrganization } from '@features/searchOrganization/ui/SearchOrganization';
import { Box, Typography } from '@mui/material';
import { MemberList } from '@widgets/memberList/ui/MemberList';
import type React from 'react';

export const MemberListPage: React.FC = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Hello from List page
      </Typography>

      <Box sx={{ mb: 3 }}>
        <SearchOrganization />
      </Box>
      <MemberList />
    </Box>
  );
};
