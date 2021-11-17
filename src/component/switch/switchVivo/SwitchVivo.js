import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const SwitchVivoStyled = styled((props) => <Switch disableRipple {...props} />)(
  ({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-switchBase': {
      transitionDuration: '300ms',
      padding: 14,
      opacity: 1,
      '& .MuiSwitch-thumb': {
        width: 10,
        height: 10,
        color: 'rgba(152, 152, 152, 1)',
        transitionDuration: '.3s',
        boxShadow: 'none',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-checked': {
        backgroundColor: 'transparent',
        color: 'red',
        //Change translateX for custom width
        transform: 'translateX(23px)',
        '& .MuiSwitch-thumb': {
          color: 'white',
          borderRadius: '1.5px',
          width: '3.5px',
          transform: 'scale(1.35,1.35)',
        },
        '& ~ .MuiSwitch-track': {
          backgroundColor: 'rgba(69, 111, 255, 1)',
          opacity: 1,
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-disabled': {
        '& .MuiSwitch-thumb': {
          color: 'rgba(152, 152, 152, 1)',
        },
        '& + .MuiSwitch-track': {
          backgroundColor: 'rgba(235, 235, 235, 1)',
          border: '1px solid lightGray',
          opacity: 1,
        },
      },
    },
    '& .MuiSwitch-track ': {
      boxSizing: 'border-box',
      borderRadius: 22 / 2,
      backgroundColor: 'rgba(235, 235, 235, 1)',
      opacity: 1,
    },
  })
);

export default function SwitchVivo(props) {
  return <SwitchVivoStyled {...props} />;
}
