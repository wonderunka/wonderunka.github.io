import React from 'react';
import { Box, Typography } from '@mui/material';
import planeIcon from "./pics/planeIcon.jpg"
// locales
import { LOCALES } from '../locales/locales';

function StartingPoint({ cityName, onClick, locale }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '10px' }} onClick={onClick}>
      {/* Use img element for the plane picture */}
      <img
        src={planeIcon}
        alt="plane icon"
        style={{ width: '35px', height: '35px' }} // Adjust the width and height as needed
      />
      <Typography variant="subtitle3">
        {cityName === 'Prague' && (
          <span>{`${LOCALES[locale].LOCATION.PRAGUE.START_PRAGUE}`}</span>
        )}
        {cityName === 'Istanbul' && (
          <span>{`${LOCALES[locale].LOCATION.ISTANBUL.START_ISTANBUL}`}</span>
        )}
      </Typography>
    </Box>
  );
}

export default StartingPoint;

