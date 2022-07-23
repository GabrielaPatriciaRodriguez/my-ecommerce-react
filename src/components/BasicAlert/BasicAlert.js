import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BasicAlerts = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="info">No tenemos stock!</Alert>
    </Stack>
  );
}

export default BasicAlerts;
