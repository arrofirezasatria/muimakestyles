import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Brightness2Icon from '@mui/icons-material/Brightness2';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

import Slider from './component/slider/sliderMuiMakeStyles/SliderMuiMakeStyles';

function valuetext(value) {
  return `${value}°C`;
}

export default function App() {
  const [value, setValue] = useState(25);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = useState(50);

  const handleSliderChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const [value3, setValue3] = React.useState([20, 37]);

  const handleSliderChange3 = (event, newValue) => {
    setValue3(newValue);
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
        <Slider
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
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        Disabled
        <Slider
          disabled
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
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        marks
        <Slider
          aria-label="Small steps"
          defaultValue={0.00000005}
          getAriaValueText={valuetext}
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay="auto"
        />
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        range slider
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value3}
          onChange={handleSliderChange3}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Stack>
    </Box>
  );
}
