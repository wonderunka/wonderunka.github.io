import React from "react";
import { Box, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// components
import MyPic from "../components/myPic";
// images
import aruba from "./pics/aruba.jpg"
import budapest from "./pics/budapest.jpg"
import cappadocia from "./pics/cappadocia.jpg"
import graduation from "./pics/graduation.jpg"
import hawaii from "./pics/hawaii.jpg"
import hawaii2 from "./pics/hawaii2.jpg"
import island from "./pics/island.jpg"
import island2 from "./pics/island2.jpg"
import island3 from "./pics/island3.jpg"
import pacifica from "./pics/pacifica.jpg"
import seychelles from "./pics/seychelles.jpg"
import seychelles2 from "./pics/seychelles2.jpg"
import seychelles3 from "./pics/seychelles3.jpg"
import tahoe from "./pics/tahoe.jpg"
import thailand from "./pics/thailand.jpg"
import oakland from "./pics/oakland.JPG"
import halfmoonbay from "./pics/halfmoonbay.jpg"
import colorado from "./pics/colorado.jpg"
import phillipines from "./pics/phillipines.jpg"
import milan from "./pics/milan.JPG"
import newyork from "./pics/newyork.jpg"
import napa from "./pics/napa.jpg"
import aurora from "./pics/aurora.jpg"
import bodrum from "./pics/bodrum.jpg"
import norway from "./pics/norway.jpg"
import maldives from "./pics/maldives.jpg"
import bayArea from "./pics/bay-area.jpg"
import alaska from "./pics/Alaska.jpg"
import alaska2 from "./pics/Alaska2.jpg"
import alaska3 from "./pics/alaska3.jpg"
import paloAlto from "./pics/paloAlto.jpg"
import carmel from "./pics/carmel.jpg"
import ny from "./pics/ny.jpg"
// locales
import { LOCALES } from '../locales/locales';


const galleryData = [
    {
        img: tahoe,
        title: 'tahoe',
        rows: 2,
        cols: 2,
    },
    {
        img: hawaii2,
        title: 'hawaii2',
    },
    {
        img: cappadocia,
        title: 'cappadocia',
    },
    {
        img: seychelles,
        title: 'seychelles',
        cols: 2,
    },
    {
        img: seychelles2,
        title: 'seychelles2',
        cols: 2,
    },
    {
        img: budapest,
        title: 'budapest',
        rows: 2,
        cols: 2,
    },
    {
        img: island3,
        title: 'island3',
    },
    {
        img: graduation,
        title: 'graduation',
    },
    {
        img: phillipines,
        title: 'phillipines',
        rows: 2,
        cols: 2,
    },
    {
        img: aruba,
        title: 'aruba',
    },
    {
        img: island,
        title: 'island',
    },
    {
        img: seychelles3,
        title: 'seychelles3',
        cols: 2,
    },
    {
        img: pacifica,
        title: 'pacifica',
    },
    {
        img: newyork,
        title: 'newyork',
    },
    {
        img: napa,
        title: 'napa',
        rows: 2,
        cols: 2,
    },
    {
        img: oakland,
        title: 'oakland',
    },
    {
        img: island2,
        title: 'island2',
    },
    {
        img: norway,
        title: 'norway',
        rows: 2,
        cols: 2,
    },
    {
        img: halfmoonbay,
        title: 'halfmoonbay',
    },
    {
        img: hawaii,
        title: 'hawaii',
    },
    {
        img: colorado,
        title: 'colorado',
    },
    {
        img: thailand,
        title: 'thailand',
    },
    {
        img: bodrum,
        title: 'bodrum',
    },
    {
        img: maldives,
        title: 'maldives',
    },
    {
        img: aurora,
        title: 'aurora',
        rows: 2,
        cols: 2,
    },
    {
        img: ny,
        title: 'ny',
    },
    {
        img: milan,
        title: 'milan',
    },
    {
        img: alaska,
        title: 'alaska',
        rows: 2,
        cols: 2,
    },
    {
        img: alaska2,
        title: 'alaska2',
    },
    {
        img: carmel,
        title: 'carmel',
    },
    {
        img: bayArea,
        title: 'bayArea',
    },
    {
        img: alaska3,
        title: 'alaska3',
    },
];

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function Gallery({ locale }) {

    return (
        <Box sx={{ textAlign: 'center', margin: '40px' }}>
            <MyPic />
            <Typography variant="subtitle1">
                {LOCALES[locale].GALLERY.OUR_JOURNEY}
            </Typography>
            <ImageList
                sx={{ width: 550, height: 750 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {galleryData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}


export default Gallery;