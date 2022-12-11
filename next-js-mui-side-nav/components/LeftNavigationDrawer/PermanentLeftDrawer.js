import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import DrawerContainer from './DrawerContainer';

const drawerWidth = 320;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerContainer/>
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
      >
        <Typography variant='h5'>
          Heading
        </Typography>
      </Box>
    </Box>
  );
}