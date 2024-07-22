import React from 'react';
import '../style.css';
// locales
import { LOCALES } from '../locales/locales';


function LanguageSwitcher({ onLanguageChange, locale }) {
  return (
    <div>
      <button
        className="language-switcher-button"
        onClick={() => onLanguageChange('en')}
      >
        {LOCALES[locale].COMPONENTS.ENGLISH}
      </button>
      <button
        className="language-switcher-button"
        onClick={() => onLanguageChange('tr')}
      >
        {LOCALES[locale].COMPONENTS.TURKISH}
      </button>
      <button
        className="language-switcher-button"
        onClick={() => onLanguageChange('cz')}
      >
        {LOCALES[locale].COMPONENTS.CZECH}
      </button>
    </div>
  );
}

export default LanguageSwitcher;

