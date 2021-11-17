import React from 'react';

import Box from '@mui/material/Box';
import Switch from './component/switch/switchVivo/SwitchVivo';

export default function App() {
  return (
    <Box
      p={'20px'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid gray',
      }}
    >
      <Switch />
    </Box>
  );
}
