import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Brightness2Icon from '@mui/icons-material/Brightness2';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

import SliderMMS from './component/slider/sliderMuiMakeStyles/SliderMuiMakeStyles';

export default function App() {
  const [value, setValue] = useState(25);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = useState(25);

  const handleSliderChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <Box p={'20px'} sx={{ border: '1px solid gray' }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Brightness2Icon sx={{ color: value >= 75 ? '#ffc107' : '#B8DDFB' }} />
        <SliderMMS
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          sx={{
            width: 220,
            '& .MuiSlider-rail': {
              backgroundColor: value >= 75 ? '#ffe082' : '#B8DDFB',
            },
            '& .MuiSlider-track:before': {
              backgroundColor: value >= 75 ? '#ffc107' : 'primary.main',
            },
          }}
        />

        <BrightnessLowIcon
          sx={{ color: value >= 75 ? '#ffc107' : '#B8DDFB' }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Brightness2Icon sx={{ color: value2 >= 75 ? '#ffc107' : '#B8DDFB' }} />
        <SliderMMS
          value={typeof value2 === 'number' ? value2 : 0}
          onChange={handleSliderChange2}
          sx={{
            width: 220,
            '& .MuiSlider-rail': {
              backgroundColor: value2 >= 75 ? '#ffe082' : '#B8DDFB',
            },
            '& .MuiSlider-track:before': {
              backgroundColor: value2 >= 75 ? '#ffc107' : 'primary.main',
            },
          }}
        />

        <BrightnessLowIcon
          sx={{ color: value2 >= 75 ? '#ffc107' : '#B8DDFB' }}
        />
      </Stack>
      {/*     <Box
        sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}
      >
        <Typography>{value}</Typography>
      </Box> */}
    </Box>
  );
}
