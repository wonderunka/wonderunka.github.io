import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Envelope from './Envelope';
import InvitationPage from './Invitation';

import locales from './locales.json'; // Assuming you have the locales file in JSON format

function App() {
  const [nameFromUrl, setNameFromUrl] = useState('');
  const [language, setLanguage] = useState('en');
  const [event, setEvent] = useState('');

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const nameParam = urlSearchParams.get('name');
    const type = urlSearchParams.get('event');

    if (nameParam) { // Check if nameParam is not null before proceeding
      const name = decodeURIComponent(nameParam.replace(/\+/g, ' '));
      setNameFromUrl(name);
    }
    if (type) {
      setEvent(type);
    }
  }, []);

  useEffect(() => {
    // Store nameFromUrl and weddingType in sessionStorage
    sessionStorage.setItem('nameFromUrl', nameFromUrl);
    sessionStorage.setItem('event', event);
  }, [nameFromUrl, event]);

  useEffect(() => {
    // Retrieve nameFromUrl and weddingType from sessionStorage when component mounts
    const storedNameFromUrl = sessionStorage.getItem('nameFromUrl');
    const storedEvent = sessionStorage.getItem('event');
    if (storedNameFromUrl) {
      setNameFromUrl(storedNameFromUrl);
    }
    if (storedEvent) {
      setEvent(storedEvent);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Envelope nameFromUrl={nameFromUrl} setLanguage={setLanguage} language={language} />
        </Route>
        <Route path="/invitation">
          <InvitationPage weddingType={event} language={language} locales={locales} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


