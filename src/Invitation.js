import React, { useState } from "react";
import MyLocation from "./myLocation";
import design from "./design.jpg";
import Typography from '@mui/material/Typography';

import './App.css';
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
          <div className="margin-top margin-bottom2">{locales[language].invitation.theWeddingOf}</div>
        </div>
        <div className="text-container subtitle2">
          <Typography variant="h3" style={titleStyle} className="name-container margin-top2">Barbora</Typography>
          <Typography variant="h2" style={subTitleStyle}>and</Typography>
          <Typography variant="h3" style={titleStyle}>Serhat</Typography>
        </div>
        { weddingType === 'CR' &&
          <MyLocation
            time={locales[language].address.crtime}
            address={locales[language].address.crAddress}
            date={locales[language].address.crDate}
          />
        }
        { weddingType === 'TR' &&
          <MyLocation
            time={locales[language].address.trtime}
            address={locales[language].address.trAddress}
            date={locales[language].address.trDate}
          />
        }
        <div className="text-container subtitle2 margin-top2 uper-case margin-bottom2">
          <div className="margin-bottom1 margin-top1">{locales[language].invitation.receptionToFollow}</div>
          {/* <div>{locales[language].invitation.receptionToFollow2}</div> */}
        </div>
        <div className="image-container-bottom">
          <img
            src={design}
            alt="design-bottom"
            style={{ transform: 'scale(0.8)', width: '1200px', height: '250px' }}
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
          <div className="margin-top margin-bottom2">
            <div className="language-buttons margin-bottom4">
              <button
                className={currentType === 'CR' ? 'selected' : ''}
                onClick={() => handleSwitch('CR')}
              >
                {locales[language].invitation.w1}
              </button>
              <button
                className={currentType === 'TR' ? 'selected' : ''}
                onClick={() => handleSwitch('TR')}
              >
                {locales[language].invitation.w2}
              </button>
            </div>
            {locales[language].invitation.theWeddingOf2}
          </div>
        </div>
        <div className="text-container subtitle2">
          <Typography variant="h3" style={titleStyle2} className="name-container margin-top2">Barbora</Typography>
          <Typography variant="h2" style={subTitleStyle}>and</Typography>
          <Typography variant="h3" style={titleStyle2}>Serhat</Typography>
        </div>
        { currentType === 'CR' &&
          <MyLocation
            time={locales[language].address.crtime}
            address={locales[language].address.crAddress}
            date={locales[language].address.crDate}
          />
        }
        { currentType === 'TR' &&
          <MyLocation
            time={locales[language].address.trtime}
            address={locales[language].address.trAddress}
            date={locales[language].address.trDate}
          />
        }
        <div className="text-container subtitle2 margin-top2 uper-case margin-bottom2">
          <div className="margin-bottom1 margin-top1">{locales[language].invitation.receptionToFollow}</div>
          {/* <div>{locales[language].invitation.receptionToFollow2}</div> */}
        </div>
        <div className="image-container-bottom">
          <img
            src={design}
            alt="design-bottom"
            style={{ transform: 'scale(0.8)', width: '1200px', height: '250px' }}
          />
        </div>
      </div>
    )
  );
};

export default InvitationPage;
