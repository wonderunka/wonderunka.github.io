import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Envelope from './Envelope';
import InvitationPage from './Invitation';
import Website from './website/src/Website';
import './website/src/App.css';
import './website/src/style.css';

import locales from './locales.json'; // Assuming you have the locales file in JSON format

function App() {
  const [nameFromUrl, setNameFromUrl] = useState('');
  const [language, setLanguage] = useState('en');
  const [weddingType, setWeddingType] = useState('');

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const name = urlSearchParams.get('name');
    const type = urlSearchParams.get('weddingType');
    if (name) {
      setNameFromUrl(name);
    }
    if (type) {
      setWeddingType(type);
    }
  }, []);

  useEffect(() => {
    // Store nameFromUrl and weddingType in sessionStorage
    sessionStorage.setItem('nameFromUrl', nameFromUrl);
    sessionStorage.setItem('weddingType', weddingType);
  }, [nameFromUrl, weddingType]);

  useEffect(() => {
    // Retrieve nameFromUrl and weddingType from sessionStorage when component mounts
    const storedNameFromUrl = sessionStorage.getItem('nameFromUrl');
    const storedWeddingType = sessionStorage.getItem('weddingType');
    if (storedNameFromUrl) {
      setNameFromUrl(storedNameFromUrl);
    }
    if (storedWeddingType) {
      setWeddingType(storedWeddingType);
    }
  }, []);

  return (
    <Router>
      <Switch>
      <Route exact path="/website">
          <Website />
        </Route>
        <Route exact path="/">
          <Envelope nameFromUrl={nameFromUrl} setLanguage={setLanguage} language={language} />
        </Route>
        <Route path="/invitation">
          <InvitationPage weddingType={weddingType} language={language} locales={locales} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

