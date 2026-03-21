import { Skeleton, TableCell, TableRow } from '@mui/material';

export const MemberListSkeleton = () => {
  const SkeletonRows = Array.from(new Array(5));
  return (
    <>
      {SkeletonRows.map((_, index) => (
        <TableRow
          key={`skeleton-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <>
            index
          }`}
        >
          <TableCell>
            <Skeleton variant="rounded" width={56} height={56} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width={60} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width={120} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
