import React, { useState } from 'react';
import { Box, Typography, Grid } from "@mui/material";
// components
import MyLocation from "../components/myLocation";
import MyPic from "../components/myPic";
import EventItinerary from "./eventItinerary";
// images
import weddingCR from "./pics/weddingCR.jpg"
import turkey from "./pics/turkey.jpg"
// locales
import { LOCALES } from '../locales/locales';
// styles
import '../style.css';

function Home({ locale, event }) {
  const [itinerary, setItinerary] = useState({
    open: false,
    locationName: '',
    address: '',
    date: '',
    date2: '',
  });

  const handleLocationClick = (locationName, dateOfWedding, address, date) => {

    if (locationName === LOCALES[locale].HOME.CZECH) {
      setItinerary({
        open: true,
        locationName,
        address,
        date: LOCALES[locale].HOME.DATE_CR_2,
        date2: LOCALES[locale].HOME.DATE_CR2_2,
      });
    } else {
      setItinerary({
        open: true,
        locationName,
        address,
        date: LOCALES[locale].HOME.DATE_TR_2,
      });
    }
  };

  const handleCloseItinerary = () => {
    setItinerary({
      ...itinerary,
      open: false,
    });
  };
  return (
    <Box sx={{ textAlign: "center", margin: "40px" }}>
      <MyPic />
      <Typography variant="subtitle1">
        {LOCALES[locale].HOME.MARK_CALENDAR}
      </Typography>
      <Grid container spacing={2}>
        {event === 'CR' && (
          <Grid item xs={12} sm={6}>
            <MyLocation
              locationName={LOCALES[locale].HOME.CZECH}
              src={weddingCR}
              locale={locale}
              dateOfWedding={new Date("2024-09-07")}
              address={"Mlýn Davídkov 36, Hryzely,; 281 63 Barchovice,;Czech Republic"}
              date={LOCALES[locale].HOME.DATE_CR}
              onClick={handleLocationClick}
            />
          </Grid>
        )}
        {event === 'TR' && (
          <Grid item xs={12} sm={6}>
            <MyLocation
              locationName={LOCALES[locale].HOME.TURKEY}
              src={turkey}
              locale={locale}
              dateOfWedding={new Date("2024-08-30")}
              address={"Akdeniz, Mersin Silifke Yolu 825/A,; 33340 Mezitli/Mersin,; Türkiye"}
              date={LOCALES[locale].HOME.DATE_TR}
              onClick={handleLocationClick}
            />
          </Grid>
        )}
        {/* Show both locations if event is not specified */}
        {event !== 'CR' && event !== 'TR' && (
          <>
            <Grid item xs={12} sm={6}>
              <MyLocation
                locationName={LOCALES[locale].HOME.TURKEY}
                src={turkey}
                locale={locale}
                dateOfWedding={new Date("2024-08-30")}
                address={"Akdeniz, Mersin Silifke Yolu 825/A,; 33340 Mezitli/Mersin,; Türkiye"}
                date={LOCALES[locale].HOME.DATE_TR}
                onClick={handleLocationClick}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MyLocation
                locationName={LOCALES[locale].HOME.CZECH}
                src={weddingCR}
                locale={locale}
                dateOfWedding={new Date("2024-09-07")}
                address={"Mlýn Davídkov 36, Hryzely,; 281 63 Barchovice,;Czech Republic"}
                date={LOCALES[locale].HOME.DATE_CR}
                onClick={handleLocationClick}
              />
            </Grid>
          </>
        )}
      </Grid>
      <EventItinerary {...itinerary} handleClose={handleCloseItinerary} locale={locale} />
    </Box>
  )
}

export default Home;