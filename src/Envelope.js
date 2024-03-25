import React from 'react';
import './Envelope.css';
import EnvelopePic from './envelope.png';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

const Envelope = ({ nameFromUrl, setLanguage, language }) => {
  const history = useHistory();

  const openEnvelope = () => {
    history.push(`/invitation`);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className="envelope-container">
      <img className="envelope-img" src={EnvelopePic} alt="envelope" onClick={openEnvelope} />
      <div className="name-tag margin-bottom" onClick={openEnvelope}>
        {nameFromUrl && `${nameFromUrl}`}
        <div className="language-buttons">
          <Button
            className={language === 'en' ? 'selected' : ''}
            onClick={() => handleLanguageChange('en')}
            style={{ color: language === 'en' ? 'rgb(255, 255, 255)' : 'rgb(111, 60, 58)' }}
          >
            English
          </Button>
          <Button
            className={language === 'tr' ? 'selected' : ''}
            onClick={() => handleLanguageChange('tr')}
            style={{ color: language === 'tr' ? 'rgb(255, 255, 255)' : 'rgb(111, 60, 58)' }}
          >
            Turkish
          </Button>
          <Button
            className={language === 'cs' ? 'selected' : ''}
            onClick={() => handleLanguageChange('cs')}
            style={{ color: language === 'cs' ? 'rgb(255, 255, 255)' : 'rgb(111, 60, 58)' }}
          >
            Czech
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Envelope;


