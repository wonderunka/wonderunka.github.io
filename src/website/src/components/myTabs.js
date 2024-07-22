import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Home from "../pages/home";
import Gallery from "../pages/gallery";
import Location from "../pages/location";
import InvitationPage from "../pages/invitationPage";
import Harmonogram from "../pages/harmonogram";
// locales
import { LOCALES } from '../locales/locales';

function MyTabs({ locale, event }) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const handleTabChange = (e, tabIndex) => {
        setCurrentTabIndex(tabIndex);
    };

    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center" // Center horizontally
                justifyContent="center" // Center vertically
            >
                <Tabs
                    value={currentTabIndex}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    sx={{
                        "& .MuiTabs-indicator": {
                            backgroundColor: 'rgb(111, 60, 58)',
                        },
                    }}
                >
                    <Tab
                        label={LOCALES[locale].TABS.HOME}
                        sx={{
                            "&.Mui-selected": {
                                color: 'rgb(111, 60, 58)',
                            },
                        }}
                    />
                    <Tab
                        label={LOCALES[locale].TABS.INVITATION}
                        sx={{
                            "&.Mui-selected": {
                                color: 'rgb(111, 60, 58)',
                            },
                        }}
                    />
                    {/* <Tab
                        label={LOCALES[locale].TABS.OUR_STORY}
                        sx={{
                            "&.Mui-selected": {
                                color: 'rgb(111, 60, 58)',
                            },
                        }}
                    /> */}
                    <Tab
                        label={LOCALES[locale].TABS.HARMONOGRAM}
                        sx={{
                            "&.Mui-selected": {
                                color: 'rgb(111, 60, 58)',
                            },
                        }}
                    />
                    <Tab
                        label={LOCALES[locale].TABS.LOCATION}
                        sx={{
                            "&.Mui-selected": {
                                color: 'rgb(111, 60, 58)',
                            },
                        }}
                    />
                    <Tab
                        label={LOCALES[locale].TABS.GALLERY}
                        sx={{
                            "&.Mui-selected": {
                                color: 'rgb(111, 60, 58)',
                            },
                        }}
                    />
                    {/* <Tab
                        label={'RSVP'}
                        sx={{
                            "&.Mui-selected": {
                                color: 'rgb(111, 60, 58)',
                            },
                        }}
                    /> */}
                </Tabs>

                {/* TAB 1 Contents */}
                {currentTabIndex === 0 && <Home locale={locale} event={event} />}

                {/* TAB 2 Contents */}
                {currentTabIndex === 1 && <InvitationPage weddingType={event} language={locale} />}

                {/* TAB 3 Contents */}
                {/* {currentTabIndex === 2 && <Story locale={locale} />} */}

                {/* TAB 4 Contents */}
                {currentTabIndex === 2 && <Harmonogram locale={locale} event={event} />}

                {/* TAB 5 Contents */}
                {currentTabIndex === 3 && <Location locale={locale} event={event} />}

                {/* TAB 6 Contents */}
                {currentTabIndex === 4 && <Gallery locale={locale} />}

                {/* TAB 7 Contents */}
                {/* {currentTabIndex === 4 && <RSVP locale={locale} />} */}
            </Box>
        </div>
    );
}


export default MyTabs;