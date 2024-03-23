import React from 'react';
import './App.css';
import EnvelopePic from './envelope.png';
import { useHistory } from 'react-router-dom';

const Envelope = ({ nameFromUrl, setLanguage, language }) => {
  const history = useHistory();

  const openEnvelope = () => {
    history.push(`/invitation`);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  const titleStyle = {
    fontFamily: 'Pacifico, cursive',
    fontSize: '65px',
    color: 'rgb(111, 60, 58)',
  };

  return (
    <div className="envelope-container">
      <img className="envelope-img" src={EnvelopePic} alt="envelope" onClick={openEnvelope} />
      <p className="name-tag text-container subtitle2 margin-bottom" style={titleStyle} onClick={openEnvelope}>
        {nameFromUrl && `${nameFromUrl}`}
        <div className="language-buttons">
          <button
            className={language === 'en' ? 'selected' : ''}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button
            className={language === 'tr' ? 'selected' : ''}
            onClick={() => handleLanguageChange('tr')}
          >
            Turkish
          </button>
          <button
            className={language === 'cs' ? 'selected' : ''}
            onClick={() => handleLanguageChange('cs')}
          >
            Czech
          </button>
        </div>
      </p>
    </div>
  );
};

export default Envelope;
