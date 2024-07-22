import React from "react";
import { Box, Typography } from "@mui/material";
// components
import MyPic from "../components/myPic";
// locales
import { LOCALES } from '../locales/locales';

function Story({ locale }) {

  return (
    <Box sx={{ textAlign: 'center', margin: '40px' }}>
      <MyPic />

      <Typography variant="subtitle1">
        {LOCALES[locale].STORY.OUR_JOURNEY}
      </Typography>
      <Typography variant="body1">
        {LOCALES[locale].STORY.STORY1}
      </Typography>
      <Typography variant="body1">
        {LOCALES[locale].STORY.STORY2}
      </Typography>
      <Typography variant="body1">
        {LOCALES[locale].STORY.STORY3}
      </Typography>
      <Typography variant="body1">
        {LOCALES[locale].STORY.STORY4}
      </Typography>
    </Box>
  )
}

export default Story;