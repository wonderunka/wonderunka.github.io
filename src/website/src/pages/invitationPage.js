import React, { useState } from "react";
import MyLocation2 from "../components/myLocation2";
// import design from "../components/myPic";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import MyPic from "../components/myPic";

import { LOCALES } from '../locales/locales';

import '../components/style2.css';

const titleStyle = {
  fontFamily: 'Pacifico, cursive',
  fontSize: '65px',
  color: 'rgb(111, 60, 58)',
  marginTop: '10px',
};

const titleStyle2 = {
  fontFamily: 'Pacifico, cursive',
  fontSize: '55px',
  color: 'rgb(111, 60, 58)',
  marginTop: '10px',
};

const subTitleStyle = {
  fontFamily: 'Amatic SC, cursive',
  fontSize: '30px',
  color: 'rgb(111, 60, 58)',
};

const InvitationPage = ({ weddingType, language }) => {
  const [currentType, setCurrentType] = useState('TR');

  const handleSwitch = (type) => {
    setCurrentType(type);
  };

  return (
    weddingType ? (
      <Box sx={{
        textAlign: "center", margin: "40px"
      }}
        className="invitation-box">
        {/* <div className="image-container-top">
          <img
            src={design}
            alt="design-top"
            style={{ transform: 'scale(0.8)', width: '1250px', height: '300px' }}
          />
        </div> */}
        <MyPic />
        <div className="text-container subtitle2 uper-case">
          <div>{LOCALES[language].invitation.youAreInvitedTo}</div>
          <div className="margin-bottom2">{LOCALES[language].invitation.theWeddingOf}</div>
        </div>
        {/* <div className="text-container subtitle2">
          <Typography variant="h3" style={titleStyle} className="name-container margin-top2">Barbora</Typography>
          <Typography variant="h2" style={subTitleStyle}>{LOCALES[language].invitation.and}</Typography>
          <Typography variant="h3" style={titleStyle}>Serhat</Typography>
        </div> */}
        {weddingType === 'CR' &&
          <MyLocation2
            time={LOCALES[language].address.crtime}
            address={LOCALES[language].address.crAddress}
            date={LOCALES[language].address.crDate}
          />
        }
        {weddingType === 'TR' &&
          <MyLocation2
            time={LOCALES[language].address.trtime}
            address={LOCALES[language].address.trAddress}
            date={LOCALES[language].address.trDate}
          />
        }
        {/* <div className="text-container subtitle2 margin-top2 uper-case margin-bottom2">
          <div className="margin-top1">{LOCALES[language].invitation.receptionToFollow}</div>
        </div> */}
        {/* <div className="image-container-bottom">
          <img
            src={design}
            alt="design-bottom"
            style={{ transform: 'scale(0.8) rotate(180deg)', width: '1200px', height: '250px' }}
          />
        </div> */}
      </Box>
    ) :
      (
        <Box sx={{ textAlign: "center", margin: "40px" }}>
          {/* <div className="image-container-top">
            <img
              src={design}
              alt="design-top"
              style={{ transform: 'scale(0.8)', width: '1250px', height: '300px' }}
            />
          </div> */}
          <MyPic />
          <div className="text-container subtitle2 uper-case">
            <div>{LOCALES[language].invitation.youAreInvitedTo}</div>
            <div className="">
              <div className="language-buttons margin-bottom4">
                <Button
                  className={currentType === 'TR' ? 'selected' : ''}
                  onClick={() => handleSwitch('TR')}
                  style={{ color: currentType === 'TR' ? 'rgb(255, 255, 255)' : 'rgb(111, 60, 58)', height: '20px', margin: '5px' }}
                >
                  {LOCALES[language].invitation.w2}
                </Button>
                <Button
                  className={currentType === 'CR' ? 'selected' : ''}
                  onClick={() => handleSwitch('CR')}
                  style={{ color: currentType === 'CR' ? 'rgb(255, 255, 255)' : 'rgb(111, 60, 58)', height: '20px', margin: '5px' }}
                >
                  {LOCALES[language].invitation.w1}
                </Button>
              </div>
              {LOCALES[language].invitation.theWeddingOf2}
            </div>
          </div>
          {/* <div className="text-container subtitle2">
            <Typography variant="h3" style={titleStyle2} className="name-container margin-top2">Barbora</Typography>
            <Typography variant="h2" style={subTitleStyle}>{LOCALES[language].invitation.and}</Typography>
            <Typography variant="h3" style={titleStyle2}>Serhat</Typography>
          </div> */}
          {currentType === 'TR' &&
            <MyLocation2
              time={LOCALES[language].address.trtime}
              address={LOCALES[language].address.trAddress}
              date={LOCALES[language].address.trDate}
            />
          }
          {currentType === 'CR' &&
            <MyLocation2
              time={LOCALES[language].address.crtime}
              address={LOCALES[language].address.crAddress}
              date={LOCALES[language].address.crDate}
            />
          }
          {/* <div className="text-container subtitle2 margin-top2 uper-case margin-bottom2">
            <div className="margin-top1">{LOCALES[language].invitation.receptionToFollow}</div>
          </div> */}
          {/* <div className="image-container-bottom">
            <img
              src={design}
              alt="design-bottom"
              style={{ transform: 'scale(0.8) rotate(180deg)', width: '1200px', height: '250px' }}
            />
          </div> */}
        </Box>
      )
  );
};

export default InvitationPage;
