import { Stack, Typography } from '@mui/material';

interface IRow {
  header: string;
  value: string;
}
export const Row = ({ header, value }: IRow) => {
  return (
    <Stack direction={'row'} gap={'4px'}>
      <Typography fontWeight={'500'}>{header}:</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};
