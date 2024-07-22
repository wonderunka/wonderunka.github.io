import React from 'react';
import { Dialog, Typography, Box, Divider } from '@mui/material';
// locales
import { LOCALES } from '../locales/locales';
// icons
import Cake from "./icons/cake.jpg"
import Ceremony from "./icons/ceremony.jpg"
import GuestArrive from "./icons/guest-arrive2.jpg"
import Lunch from "./icons/lunch.jpg"
import WelcomeDrink from "./icons/welcome-drink.jpg"
import Party from "./icons/party.jpg"
import Party2 from "./icons/party2.jpg"
import Photos from "./icons/photos.jpg"

const textStyles = {
  fontFamily: 'Snell Roundhand, cursive',
  fontSize: '60px',
  color: 'rgb(111, 60, 58)',
  fontWeight: 'bold',
  marginTop: '40px',
};

function EventItinerary({ open, handleClose, locationName, address, date, date2, locale }) {
  const getTimelineItems = () => {
    if (locationName === LOCALES[locale].HOME.TURKEY) {
      return [
        { title: LOCALES[locale].HOME.TIMELINE.CEREMONY, time: LOCALES[locale].HOME.TIMELINE.PM_80, icon: Ceremony, width: '44px', height: '35px' },
        { title: LOCALES[locale].HOME.TIMELINE.DINNER, time: LOCALES[locale].HOME.TIMELINE.PM_19, icon: Lunch, width: '40px', height: '30px' },
        { title: LOCALES[locale].HOME.TIMELINE.PHOTOS, time: LOCALES[locale].HOME.TIMELINE.PM_20, icon: Photos, width: '40px', height: '32px' },
        { title: LOCALES[locale].HOME.TIMELINE.CAKE, time: LOCALES[locale].HOME.TIMELINE.PM_21, icon: Cake, width: '35px', height: '40px' },
        { title: LOCALES[locale].HOME.TIMELINE.PARTY, time: LOCALES[locale].HOME.TIMELINE.PM_22, icon: Party, width: '35px', height: '38px' },
      ];
    } else if (locationName === LOCALES[locale].HOME.CZECH) {
      return [
        { title: LOCALES[locale].HOME.TIMELINE.WELCOME_DRINK, time: LOCALES[locale].HOME.TIMELINE.PM_12, icon: GuestArrive, width: '65px', height: '35px' },
        { title: LOCALES[locale].HOME.TIMELINE.CEREMONY, time: LOCALES[locale].HOME.TIMELINE.PM_1, icon: Ceremony, width: '44px', height: '35px' },
        { title: LOCALES[locale].HOME.TIMELINE.PHOTO_TOAST, time: LOCALES[locale].HOME.TIMELINE.PM_1_30, icon: WelcomeDrink, width: '35px', height: '38px' },
        { title: LOCALES[locale].HOME.TIMELINE.LUNCH, time: LOCALES[locale].HOME.TIMELINE.PM_14, icon: Lunch, width: '40px', height: '30px' },
        { title: LOCALES[locale].HOME.TIMELINE.PHOTO_GAME, time: LOCALES[locale].HOME.TIMELINE.PM_15_30, icon: Photos, width: '40px', height: '32px' },
        { title: LOCALES[locale].HOME.TIMELINE.CAKE, time: LOCALES[locale].HOME.TIMELINE.PM_16_30, icon: Cake, width: '35px', height: '40px' },
        { title: LOCALES[locale].HOME.TIMELINE.FIRST_DANCE, time: LOCALES[locale].HOME.TIMELINE.PM_17_30, icon: Party, width: '35px', height: '38px' },
        { title: LOCALES[locale].HOME.TIMELINE.DINNER, time: LOCALES[locale].HOME.TIMELINE.PM_18_30, icon: Lunch, width: '40px', height: '30px' },
        { title: LOCALES[locale].HOME.TIMELINE.PARTY, time: LOCALES[locale].HOME.TIMELINE.PM_21, icon: Party2, width: '35px', height: '38px' },
      ];
    }
    return [];
  };

  const sunday = { title: LOCALES[locale].HOME.TIMELINE.BREAKFAST, time: '10:00 AM', icon: Lunch, width: '40px', height: '30px' };
  return (
    <Dialog open={open} onClose={handleClose} maxHeight="50px" maxWidth="50px">
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <div className="name-container">
          <div style={textStyles}>{LOCALES[locale].HOME.TIMELINE.TITLE}</div>
        </div>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" style={{ fontStyle: 'italic', marginBottom: '10px' }}>
          {date}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ textAlign: 'center', margin: '10px' }}>
          <div className="wedding-timeline">
            {getTimelineItems().map((item, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <img
                  src={item.icon}
                  alt="plane icon"
                  style={{ width: item.width, height: item.height, marginBottom: "-30px" }}
                />
                <Typography variant="subtitle1" fontWeight="bold" fontSize="18px">
                  {item.title}
                </Typography>
                <Typography variant="body1" fontSize="16px" style={{ marginTop: "-30px" }}>
                  {item.time}
                </Typography>
              </div>
            ))}
            {
              date2 && (
                <>
                  <Divider sx={{ my: 2 }} style={{ marginTop: '40px' }} />
                  <Typography variant="body1" style={{ fontStyle: 'italic', marginBottom: '10px' }}>
                    {date2}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <div key={getTimelineItems().length + 1} style={{ marginBottom: '30px' }}>
                    <img
                      src={sunday.icon}
                      alt="plane icon"
                      style={{ width: sunday.width, height: sunday.height, marginBottom: "-30px" }} />
                    <Typography variant="subtitle1" fontWeight="bold" fontSize="18px">
                      {sunday.title}
                    </Typography>
                    <Typography variant="body1" fontSize="16px" style={{ marginTop: "-30px" }}>
                      {sunday.time}
                    </Typography>
                  </div>
                </>
              )
            }
          </div>
        </Box>
      </Box>
    </Dialog>
  );
}

export default EventItinerary;

