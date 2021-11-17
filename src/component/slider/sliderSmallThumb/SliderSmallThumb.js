import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Slider from '@mui/material/Slider';

const SliderStyled = styled(Slider)(({ theme }) => ({
  height: 10,
  '& .MuiSlider-rail': {
    backgroundColor: '#B8DDFB',
    width: 'calc(100% + 10px)',
    transform: 'translateX(-5px)',
    top: 'initial',
    opacity: 0.8,
  },
  '& .MuiSlider-track': {
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    border: 'none',
    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: 'calc(100% + 10px)',
      height: 10,
      borderRadius: 8,
      backgroundColor: theme.palette.primary.main,
      opacity: 0.8,
      transform: 'translateX(-5px)',
    },
  },
  '& .MuiSlider-thumb': {
    height: 6,
    width: 6,
    backgroundColor: 'white',
  },
  '&:hover ': {
    '& .MuiSlider-track:before, .MuiSlider-rail': {
      opacity: 1,
    },
  },
  '&.Mui-disabled': {
    '& .MuiSlider-rail': {
      backgroundColor: 'lightGray',
    },
    '& .MuiSlider-track:before': {
      backgroundColor: 'gray',
    },
  },
}));

export default function SliderSmallThumb(props) {
  return <SliderStyled {...props} />;
}
