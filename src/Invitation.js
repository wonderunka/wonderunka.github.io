import React, { useState } from "react";
import MyLocation from "./myLocation";
import design from "./design.jpg";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './style.css';

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

const InvitationPage = ({ weddingType, language, locales }) => {
  const [currentType, setCurrentType] = useState('TR');

  const handleSwitch = (type) => {
    setCurrentType(type);
  };

  return (
    weddingType ? (
      <div>
        <div className="image-container-top">
          <img
            src={design}
            alt="design-top"
            style={{ transform: 'scale(0.8)', width: '1250px', height: '300px' }}
          />
        </div>
        <div className="text-container subtitle2 uper-case">
          <div>{locales[language].invitation.youAreInvitedTo}</div>
          <div className="margin-bottom2">{locales[language].invitation.theWeddingOf}</div>
        </div>
        <div className="text-container subtitle2">
          <Typography variant="h3" style={titleStyle} className="name-container margin-top2">Barbora</Typography>
          <Typography variant="h2" style={subTitleStyle}>{locales[language].invitation.and}</Typography>
          <Typography variant="h3" style={titleStyle}>Serhat</Typography>
        </div>
        {weddingType === 'CR' &&
          <MyLocation
            time={locales[language].address.crtime}
            address={locales[language].address.crAddress}
            date={locales[language].address.crDate}
          />
        }
        {weddingType === 'TR' &&
          <MyLocation
            time={locales[language].address.trtime}
            address={locales[language].address.trAddress}
            date={locales[language].address.trDate}
          />
        }
        <div className="text-container subtitle2 margin-top2 uper-case margin-bottom2">
          <div className="margin-top1 margin-bottom3">{locales[language].invitation.receptionToFollow}</div>
        </div>
        <div className="image-container-bottom">
          <img
            src={design}
            alt="design-bottom"
            style={{ transform: 'scale(0.8) rotate(180deg)', width: '1200px', height: '250px' }}
          />
        </div>
      </div>
    ) :
      (
        <div>
          <div className="image-container-top">
            <img
              src={design}
              alt="design-top"
              style={{ transform: 'scale(0.8)', width: '1250px', height: '300px' }}
            />
          </div>

          <div className="text-container subtitle2 uper-case">
            <div>{locales[language].invitation.youAreInvitedTo}</div>
            <div className="margin-bottom2">
              <div className="language-buttons margin-bottom4">
                <Button
                  className={currentType === 'TR' ? 'selected' : ''}
                  onClick={() => handleSwitch('TR')}
                  style={{ color: currentType === 'TR' ? 'rgb(255, 255, 255)' : 'rgb(111, 60, 58)', height: '20px', margin: '5px' }}
                >
                  {locales[language].invitation.w2}
                </Button>
                <Button
                  className={currentType === 'CR' ? 'selected' : ''}
                  onClick={() => handleSwitch('CR')}
                  style={{ color: currentType === 'CR' ? 'rgb(255, 255, 255)' : 'rgb(111, 60, 58)', height: '20px', margin: '5px' }}
                >
                  {locales[language].invitation.w1}
                </Button>
              </div>
              {locales[language].invitation.theWeddingOf2}
            </div>
          </div>
          <div className="text-container subtitle2">
            <Typography variant="h3" style={titleStyle2} className="name-container margin-top2">Barbora</Typography>
            <Typography variant="h2" style={subTitleStyle}>{locales[language].invitation.and}</Typography>
            <Typography variant="h3" style={titleStyle2}>Serhat</Typography>
          </div>
          {currentType === 'TR' &&
            <MyLocation
              time={locales[language].address.trtime}
              address={locales[language].address.trAddress}
              date={locales[language].address.trDate}
            />
          }
          {currentType === 'CR' &&
            <MyLocation
              time={locales[language].address.crtime}
              address={locales[language].address.crAddress}
              date={locales[language].address.crDate}
            />
          }
          <div className="text-container subtitle2 margin-top2 uper-case margin-bottom2">
            <div className="margin-top1 margin-bottom3">{locales[language].invitation.receptionToFollow}</div>
          </div>
          <div className="image-container-bottom">
            <img
              src={design}
              alt="design-bottom"
              style={{ transform: 'scale(0.8) rotate(180deg)', width: '1200px', height: '250px' }}
            />
          </div>
        </div>
      )
  );
};

export default InvitationPage;
