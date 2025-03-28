'use client';

import { createTheme } from "@mui/material";

//funcion tipo arrow
export const theme = createTheme({
    //paleta de colores de la aplicacion
    palette: {
        primary: {
            main: "#2D2D2D",
        },
        secondary: {
            main: "#DC004E",
        },
        text: {
            light: '#566573'
        }
    },
    typography: {
        //roboto o arial usaremos 
        fontFamily: "Arial, sans-serif",
    },
});