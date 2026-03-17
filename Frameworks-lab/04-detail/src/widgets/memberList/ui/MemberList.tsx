import { useMemberListModel } from '@entities/member/model/memberContext';
import { MemberListCard } from '@entities/member/ui/MemberListCard';
import { MemberListSkeleton } from '@entities/member/ui/MemberListSkeleton';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const MemberList = () => {
  const { members, isLoading } = useMemberListModel();

  return (
    <>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table aria-label="member list table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <MemberListSkeleton />
            ) : (
              <MemberListCard members={members} />
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        component={RouterLink}
        to="/detail"
        variant="contained"
        color="primary"
      >
        Navigate to detail page
      </Button>
    </>
  );
};
