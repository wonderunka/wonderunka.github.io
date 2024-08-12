import React from "react";
import { Box, Typography } from "@mui/material";
// locales
import { LOCALES } from '../locales/locales';

function Istanbul({ locale }) {
    return (
        <Box sx={{ textAlign: 'center', margin: '40px' }}>
            <div>
                <Typography variant="body1" style={{ marginBottom: '30px', marginTop: '-20px', fontSize: '1.2rem', fontWeight: 'bold', fontStyle: 'italic' }}>{LOCALES[locale].LOCATION.ISTANBUL.BEGIN_JOURNEY}</Typography>
            </div>
            <div>
                <Typography variant="subtitle3">{LOCALES[locale].LOCATION.ISTANBUL.FLIGHT}</Typography>
                <Typography variant="body1">{LOCALES[locale].LOCATION.ISTANBUL.NEAREST_AIRPORTS}</Typography>
                <Typography variant="subtitle3">{LOCALES[locale].LOCATION.ISTANBUL.TRAVEL_TO_MERSIN}</Typography>
                <Typography variant="body1">
                    {LOCALES[locale].LOCATION.ISTANBUL.TRAVEL}
                    <br />
                    {LOCALES[locale].LOCATION.ISTANBUL.TRAVEL_OPTIONS}
                </Typography>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12791.141480764705!2d34.5075588!3d36.7277156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15278a0683434695%3A0x558c52a560c0114c!2sSahil%20Mart%C4%B1%20Hotel!5e0!3m2!1sen!2sus!4v1706553890934!5m2!1sen!2sus" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    )
}

export default Istanbul;