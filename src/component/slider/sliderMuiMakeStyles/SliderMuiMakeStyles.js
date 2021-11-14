import * as React from 'react';

import styled from '@mui/material/styles/styled';
import Slider from '@mui/material/Slider';

const SliderMuiMakeStyles = styled((props) => <Slider {...props} />, {
  shouldForwardProp: (prop) => prop !== 'scale',
})(({ theme, scale }) => ({
  height: 10,
  '& .MuiSlider-rail': {
    backgroundColor: '#B8DDFB',
    width: 'calc(100% + 10px)',
    transform: 'translateX(-5px)',
    top: 'initial',
    opacity: 0.5,
  },
  '& .MuiSlider-track': {
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: 'transparent',
    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: 'calc(100% + 10px)',
      height: 10,
      borderRadius: 8,
      backgroundColor: theme.palette.primary.main,
      opacity: 0.5,
      transform: 'translateX(-5px)',
    },
  },
  '& .MuiSlider-thumb': {
    width: 6,
    height: 6,
    color: 'white',
  },
  '&:hover > *': {
    opacity: 1,
  },
}));

export default function SliderVivo(props) {
  return <SliderMuiMakeStyles {...props} />;
}
