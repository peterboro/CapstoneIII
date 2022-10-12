import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%" backgroundColor= "#3f51b5">
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;