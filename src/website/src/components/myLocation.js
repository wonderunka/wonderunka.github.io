import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// locales
import { LOCALES } from '../locales/locales';

function MyLocation({ locationName, src, locale, dateOfWedding, address, date, onClick }) {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Calculate the countdown and update the state
    const calculateCountdown = () => {
      const now = new Date();
      const timeDifference = dateOfWedding - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        setCountdown(`${days} ${LOCALES[locale].COMPONENTS.COUNT_DOWN}`);
      } else {
        // setCountdown(LOCALES[locale].COMPONENTS.WEDDING_DAY);
        clearInterval(intervalId); // Stop the countdown when the wedding day is reached
      }
    };

    // Update the countdown every second
    const intervalId = setInterval(calculateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [dateOfWedding, locale]);

  const theme = useTheme();

  return (
    <Paper elevation={3}
      style={{ padding: 20, width: '400px', height: '300px', marginLeft: '10px' }}
      sx={{
        [theme.breakpoints.up("md")]: {
          // Adjust width on larger screens
          width: "50%",
        },
      }}
      onClick={() => onClick(locationName, dateOfWedding, address, date)}

    >
      <Typography variant="subtitle2">{locationName}</Typography>
      <Typography variant="subtitle3" mb={2}>{date}</Typography>
      <Typography variant="body1">{countdown}</Typography>
      <div>
        <img
          src={src}
          alt="image"
          style={{
            width: '140px',
            height: '140px',
            marginBottom: '20px',
          }}
        />
      </div>
      <Typography variant="body1" style={{ fontStyle: 'italic' }} component="div">
        {address && address.split(';').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Paper>
  );
}

export default MyLocation;
