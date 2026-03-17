import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import type { MemberDetailEntity } from '../model/type';

export const MemberDetailCard = (member: MemberDetailEntity) => {
  return (
    <Card sx={{ mt: 3, mb: 4 }} elevation={3}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Avatar
            src={member.avatarUrl}
            alt={`${member.login}'s avatar`}
            sx={{ width: 120, height: 120, boxShadow: 3 }}
          />
        </Box>
        <Typography
          variant="h6"
          color="text.secondary"
          gutterBottom
          align="center"
        >
          Username: {member.login}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography variant="body1">
            <strong>ID:</strong> {member.id}
          </Typography>
          <Typography variant="body1">
            <strong>Name:</strong> {member.name || 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Company:</strong> {member.company || 'N/A'}
          </Typography>
          <Typography variant="body1">
            <strong>Bio:</strong> {member.bio || 'N/A'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
