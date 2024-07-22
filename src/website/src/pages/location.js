import React, { useState } from 'react';
import { Box, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import MyPic from '../components/myPic';
import Prague from './prague';
import Istanbul from './istanbul';
import { LOCALES } from '../locales/locales';
import planeIcon from "./pics/planeIcon.jpg"

function Location({ locale, event }) {
  const [selectedStartingPoint, setSelectedStartingPoint] = useState(event);

  const handleStartingPointChange = (event) => {
    console.log('event: ', event.target.value);
    setSelectedStartingPoint(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedStartingPoint === item,
    onChange: handleStartingPointChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
    style: {
      color: 'rgb(111, 60, 58)',
      '&.Mui-checked': {
        color: 'rgb(111, 60, 58)',
      },
    },
  });

  return (
    <Box sx={{ textAlign: 'center', margin: '40px' }}>
      <MyPic />
      <Typography variant="subtitle1">{LOCALES[locale].LOCATION.DISCOVER_LOCATION}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <img
            src={planeIcon}
            alt="plane icon"
            style={{ width: '35px', height: '35px', marginBottom: '10px' }}
          />
          <Typography variant="subtitle3" style={{ marginLeft: '10px' }}>{LOCALES[locale].LOCATION.START_IN} {event === 'TR' ? LOCALES[locale].HOME.LOCATION._ : (event === 'CR' ? LOCALES[locale].LOCATION.PRAGUE._ : '')}</Typography>
        </Box>
        {event !== 'TR' && event !== 'CR' && (
          <RadioGroup
            value={selectedStartingPoint}
            onChange={handleStartingPointChange}
            sx={{ flexDirection: 'row', alignItems: 'center', gap: '45px' }}
          >
            <FormControlLabel
              value="Istanbul"
              control={<Radio {...controlProps('TR')} />}
              label={<Typography variant="subtitle4">{LOCALES[locale].LOCATION.ISTANBUL._}</Typography>}
              sx={{ alignItems: 'center' }}
            />
            <FormControlLabel
              value="Prague"
              control={<Radio {...controlProps('CR')} />}
              label={<Typography variant="subtitle4">{LOCALES[locale].LOCATION.PRAGUE._}</Typography>}
              sx={{ alignItems: 'center' }}
            />
          </RadioGroup>
        )}
      </Box>
      {/* Display content based on the selected starting point */}
      {selectedStartingPoint === 'CR' && (
        <>
          <Prague locale={locale} />
        </>
      )}
      {selectedStartingPoint === 'TR' && (
        <>
          <Istanbul locale={locale} />
        </>
      )}
    </Box>
  );
}

export default Location;

