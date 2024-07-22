import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Envelope from './Envelope';
import InvitationPage from './Invitation';
import Website from './website/src/Website';
import './website/src/App.css';
import './website/src/style.css';
import locales from './locales.json';

function App() {
  const [nameFromUrl, setNameFromUrl] = useState('');
  const [language, setLanguage] = useState('en');
  const [event, setEvent] = useState('');

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const nameParam = urlSearchParams.get('name');
    const type = urlSearchParams.get('event');

    if (nameParam) {
      const name = decodeURIComponent(nameParam.replace(/\+/g, ' '));
      setNameFromUrl(name);
    }
    if (type) {
      setEvent(type);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('name', nameFromUrl);
    sessionStorage.setItem('event', event);
  }, [nameFromUrl, event]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Website event={event} language={language} />
        </Route>
        <Route path="/home">
          <Website event={event} language={language} />
        </Route>
        <Route path="/invitation">
          <InvitationPage event={event} language={language} locales={locales} />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


