import React from 'react';
//importaciones material-ui
import AppBar from "@material-ui/core/AppBar";
//Importaciones locales
import  {BarSesion} from './bar/BarSesion';

const AppNabBar = () => {
    return (
        <div>
            <AppBar position="static">
                <BarSesion />
            </AppBar>
        </div>
    );
};

export default AppNabBar;