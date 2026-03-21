export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'success';
    case 'dead':
      return 'error';
    default:
      return 'default';
  }
};
