import React, { useState } from 'react';
import { Typography, Paper } from "@mui/material";
import '../style.css';
// locales
import { LOCALES } from '../locales/locales';

const textStyles = {
    fontFamily: 'Snell Roundhand, cursive',
    fontSize: '35px',
    color: 'rgb(111, 60, 58)',
    fontWeight: 'bold',
    marginTop: '100px',
    marginBottom: '20px',
  };

  const inputStyles = {
    fontFamily: 'Snell Roundhand',
    fontSize: '18px',
    color: 'rgb(111, 60, 58)',
  };

  function RVSP({ locale }) {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState(1);
    const [attendance, setAttendance] = useState('yes');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [dietaryRestriction, setDietaryRestriction] = useState('none');
    const [confirmationMessage, setConfirmationMessage] = useState('');
  
    const isSubmitDisabled = !name || !email || !guests || !attendance || !address || !dietaryRestriction;
  
    const submitRSVP = () => {
      // You can customize this part to handle the RSVP data (e.g., send to a server, store in a database)
      
      // For now, let's display a confirmation message
      setConfirmationMessage(`${LOCALES[locale].RSVP.CONFIRMATION_1} ${name} ${LOCALES[locale].RSVP.CONFIRMATION_2} ${guests} ${LOCALES[locale].RSVP.CONFIRMATION_3}`);
    };
  
    return (
      <div>
        <div className="name-container">
          <div style={textStyles}>{LOCALES[locale].RSVP.RSVP_TITLE}</div>
        </div>
        <form>
          <Typography variant="subtitle2" fontWeight="bold" fontSize="18px">
            {LOCALES[locale].RSVP.NAME}
          </Typography>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyles}
          />
  
          <Typography variant="subtitle2" fontWeight="bold" fontSize="18px">
            {LOCALES[locale].RSVP.EMAIL}
          </Typography>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyles}
          />

          <Typography variant="subtitle2" fontWeight="bold" fontSize="18px">
            {LOCALES[locale].RSVP.ADDRESS}
          </Typography>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={inputStyles}
          />
  
          <Typography variant="subtitle2" fontWeight="bold" fontSize="18px">
            {LOCALES[locale].RSVP.NUMBER_GUESTS}
          </Typography>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
            style={inputStyles}
          />
  
          <Typography variant="subtitle2" fontWeight="bold" fontSize="18px">
            {LOCALES[locale].RSVP.ATTENDANCE}
          </Typography>
          <select
            id="attendance"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            required
            style={inputStyles}
          >
            <option value="yes">{LOCALES[locale].RSVP.YES}</option>
            <option value="no">{LOCALES[locale].RSVP.NO}</option>
          </select>
  
          <Typography variant="subtitle2" fontWeight="bold" fontSize="18px">
            {LOCALES[locale].RSVP.DIETARY_RESTRICTION}
          </Typography>
          <select
            id="dietaryRestriction"
            value={dietaryRestriction}
            onChange={(e) => setDietaryRestriction(e.target.value)}
            style={inputStyles}
          >
            <option value="none">{LOCALES[locale].RSVP.NONE}</option>
            <option value="vegetarian">{LOCALES[locale].RSVP.VEGETARIAN}</option>
            <option value="meat">{LOCALES[locale].RSVP.MEAT}</option>
          </select>
  
          <button
            className="rsvp-button"
            type="button"
            onClick={submitRSVP}
            disabled={isSubmitDisabled}
          >
            {LOCALES[locale].RSVP.SUBMIT}
          </button>
        </form>
        {confirmationMessage && (
          <Paper style={{ width: '280px', padding: '10px', margin: '20px' }}>
            <Typography style={inputStyles} fontWeight="bold" fontSize="18px">{confirmationMessage}</Typography>
          </Paper>
        )}
      </div>
    );
  }
  
  export default RVSP;
