import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, Box } from "@mui/material";
import MyTabs from "./components/myTabs";
import LanguageSwitcher from "./components/languageSwitcher";
import './App.css';
import './style.css';
// images
import design from "./pages/pics/design.jpg"

const theme = createTheme({
  typography: {
    title1: {
      fontFamily: 'Adelicia Script Clean Regular',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 1.2,
      textTransform: 'none',
      letterSpacing: '-0.1px',
      fontSize: '52.8px',
      color: 'rgb(111, 60, 58)',
    },
    subtitle1: {
      fontFamily: 'MrsEavesRoman Regular',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontSize: '24px',
      color: 'rgb(111, 60, 58)',
      marginBottom: '40px',
      marginTop: '40px',
    },
    subtitle2: {
      fontFamily: 'MrsEavesRoman Regular',
      fontStyle: 'normal',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontSize: '24px',
      color: 'rgb(111, 60, 58)',
      marginBottom: '10px',
      marginTop: '10px',
      fontWeight: 'bold',
    },
    subtitle3: {
      fontFamily: 'MrsEavesRoman Regular',
      fontStyle: 'normal',
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontSize: '22px',
      color: 'rgb(111, 60, 58)',
      marginBottom: '20px',
      marginTop: '10px',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: 'MrsEavesRoman Regular',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 1.1,
      textTransform: 'none',
      letterSpacing: 'normal',
      fontSize: '16px',
      color: 'rgb(111, 60, 58)',
      marginBottom: '10px',
    },
    button: {
      fontStyle: 'italic',
    },
    titleName: {
      fontFamily: "Adelicia Script Clean Regular",
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 1.2,
      textTransform: 'none',
      letterSpacing: '-0.1px',
      fontSize: '52.8px',
      color: 'rgb(111, 60, 58)',
      textAlign: 'center',
      margin: '0',
    },
    subtitle4: {
      fontFamily: 'MrsEavesRoman Regular',
      fontWeight: 400,
      lineHeight: 1,
      textTransform: 'uppercase',
      fontSize: '22px',
      color: 'rgb(111, 60, 58)',
    },
  },
});


const textStyles = {
  fontFamily: 'Snell Roundhand, cursive',
  fontSize: '60px',
  color: 'rgb(111, 60, 58)',
  fontWeight: 'bold',
};


function Website({ event, language }) {
  const [locale, setLocale] = useState(language ? language : 'en');

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        position="relative" /* Add this style to make the container relative */
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginBottom="50px"
        marginTop="50px"
      >
        <div className="image-container-top">
          <img
            src={design}
            alt="design-top"
            style={{ transform: 'scale(0.8)', marginTop: '-40px' }}
          />
        </div>
        <div className="language-switcher-container">
          <LanguageSwitcher onLanguageChange={handleLanguageChange} locale={locale} />
        </div>
        <div className="name-container">
          <div style={textStyles}>{'Barbora & Serhat'}</div>
        </div>
      </Box>
      <MyTabs locale={locale} event={event} />
      <div className="image-container-bottom">
        <img
          src={design}
          alt="design-bottom"
          style={{ transform: 'scale(0.8)' }}
        />
      </div>
    </ThemeProvider>
  );
}

export default Website;