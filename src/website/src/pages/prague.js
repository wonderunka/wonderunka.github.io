import React from "react";
import { Box, Typography } from "@mui/material";
// locales
import { LOCALES } from '../locales/locales';

function Prague({ locale }) {
    if (locale === 'cz') {
        return (
            <Box sx={{ textAlign: 'center', margin: '40px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.900763531584!2d14.991460100000005!3d49.93820329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c6e141bb905d5%3A0x39685235cf89b41!2smill%20Dav%C3%ADdkov!5e0!3m2!1sen!2sus!4v1704681827248!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <Typography variant="body1">
                    {LOCALES[locale].LOCATION.LEARN_MORE}{" "}
                    <a href="https://www.mlyndavidkov.cz/svatby/" target="_blank" rel="noopener noreferrer">
                        {LOCALES[locale].LOCATION.CLICK_HERE}
                    </a>
                    .
                </Typography>
            </Box>
        )
    }

    return (
        <Box sx={{ textAlign: 'center', margin: '40px' }}>
            <div>
                <Typography variant="body1" style={{ marginBottom: '30px', marginTop: '-20px', fontSize: '1.2rem', fontWeight: 'bold', fontStyle: 'italic' }}>{LOCALES[locale].LOCATION.PRAGUE.BEGIN_JOURNEY}</Typography>
                <Typography variant="subtitle3">{LOCALES[locale].LOCATION.PRAGUE.TAKE_TRAIN}</Typography>
                <Typography variant="body1">
                    {LOCALES[locale].LOCATION.PRAGUE.HEAD_PRAGUE_STATION}
                    <br />
                    {LOCALES[locale].LOCATION.PRAGUE.PURCHASE_TICKET}
                </Typography>

                <Typography variant="subtitle3">{LOCALES[locale].LOCATION.PRAGUE.TRAVEL_KOLIN}</Typography>
                <Typography variant="body1">
                    {LOCALES[locale].LOCATION.PRAGUE.BOARD_TRAIN}
                    <br />
                    {LOCALES[locale].LOCATION.PRAGUE.RELAX_RIDE}
                </Typography>

                <Typography variant="subtitle3">{LOCALES[locale].LOCATION.PRAGUE.ARRIVE_KOLIN}</Typography>
                <Typography variant="body1">{LOCALES[locale].LOCATION.PRAGUE.DISEMBARK_KOLIN}</Typography>

                <Typography variant="subtitle3">{LOCALES[locale].LOCATION.PRAGUE.CONTINUE_BARCHOVICE}</Typography>
                <Typography variant="body1">
                    {LOCALES[locale].LOCATION.PRAGUE.TAKE_LOCAL_TRANSPORT}
                    <br />
                    {LOCALES[locale].LOCATION.PRAGUE.TRAVEL_OPTIONS}
                </Typography>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.900763531584!2d14.991460100000005!3d49.93820329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c6e141bb905d5%3A0x39685235cf89b41!2smill%20Dav%C3%ADdkov!5e0!3m2!1sen!2sus!4v1704681827248!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Typography variant="body1">
                {LOCALES[locale].LOCATION.LEARN_MORE}{" "}
                <a href="https://www.mlyndavidkov.cz/svatby/" target="_blank" rel="noopener noreferrer">
                    {LOCALES[locale].LOCATION.CLICK_HERE}
                </a>
                .
            </Typography>
        </Box>
    )
}

export default Prague;