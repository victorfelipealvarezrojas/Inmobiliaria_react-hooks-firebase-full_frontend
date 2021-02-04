import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton, Toolbar, Typography } from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';


const styles = makeStyles((temaVariable) => ({
    //cuando su tamalo sea escritorio mostrara la opcion de login si es menos de md no
    sectiondesktop: {
        display: "none",
        [temaVariable.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    seccionMobile: {
        display: "flex",
        [temaVariable.breakpoints.up("md")]: {
            display: "none"
        }
    },
    grow: {
        flexGrow: 1
    },
    iconbar: {
        marginTop: 0,
        marginRight: 2,

    },
    button: {
        color: '#FFFFFF'
    }
}));

export const BarSesion = () => {

    const clases = styles();

    return (
        <div>
            <Toolbar>
                <IconButton color="inherit">
                    <i className="material-icons" style={{ color: '#FFFFFF' }}>menu</i>
                </IconButton>
                <div className={clases.grow}> </div>
                <Typography className="tutulo-bar" variant="h6">
                    <HomeWorkIcon fontSize="large" className={clases.iconbar} style={{ color: '#D8D8D8' }} />
                    Inmobiliaria
                </Typography>
                <div className={clases.grow}> </div>
                <div className={clases.sectiondesktop}>
                    <IconButton color="inherit">
                        <i className="material-icons" style={{ color: '#FFFFFF' }}>person</i>
                    </IconButton>
                </div>
                <div className={clases.seccionMobile}>
                    <IconButton color="inherit">
                        <i className="material-icons" style={{ color: '#FFFFFF' }}>more_vert</i>
                    </IconButton>
                </div>
            </Toolbar>
        </div>
    );
};

