import { Box } from '@mui/material';
import * as React from 'react';
import DrawerContainer from '../components/LeftNavigationDrawer/DrawerContainer';
import PageContent from '../components/MainContent/PageContent';

export default function MyApp() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <DrawerContainer/>
        <PageContent/>
      </Box>
    </div>
  );
}