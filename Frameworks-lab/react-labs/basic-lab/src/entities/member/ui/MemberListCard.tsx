import { Avatar, Link as MuiLink, TableCell, TableRow } from '@mui/material';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import type { MemberListEntity } from '../model/type';

interface MemberListCardProps {
  members: MemberListEntity[];
}

export const MemberListCard = ({ members }: MemberListCardProps) => {
  return (
    <>
      {members.map((member) => (
        <TableRow
          key={member.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>
            <Avatar
              src={member.avatarUrl}
              alt={`Avatar for ${member.login}`}
              variant="rounded"
              sx={{ width: 56, height: 56 }}
            />
          </TableCell>
          <TableCell>{member.id}</TableCell>
          <TableCell>
            <MuiLink
              component={RouterLink}
              to={generatePath('/member/detail/:id', { id: member.login })}
              underline="hover"
              color="primary"
            >
              {member.login}
            </MuiLink>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
