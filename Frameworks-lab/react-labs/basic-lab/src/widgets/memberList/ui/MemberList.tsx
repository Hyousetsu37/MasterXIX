import { useMemberListModel } from '@entities/member/model/memberContext';
import { MemberListCard } from '@entities/member/ui/MemberListCard';
import { MemberListSkeleton } from '@entities/member/ui/MemberListSkeleton';
import {
  // Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';

export const MemberList = () => {
  const {
    members,
    isLoading,
    page,
    perPage,
    changePage,
    changePerPage,
    hasMoreMembers,
  } = useMemberListModel();

  const dynamicCount = hasMoreMembers ? -1 : page * perPage + members.length;

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
        <TablePagination
          component="div"
          count={dynamicCount}
          page={page}
          onPageChange={(_, newPage) => changePage(newPage)}
          rowsPerPage={perPage}
          onRowsPerPageChange={(event) =>
            changePerPage(parseInt(event.target.value, 10))
          }
          rowsPerPageOptions={[5, 10, 20]}
          labelRowsPerPage="Members per page:"
        />
      </TableContainer>
      {/* 
      <Button
        component={RouterLink}
        to="/detail"
        variant="contained"
        color="primary"
      >
        Navigate to detail page
      </Button> */}
    </>
  );
};
