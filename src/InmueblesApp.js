import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//importaciones material-ui
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import theme from "./theme/theme";
//Componentes sitio
import AppNabBar from "./components/layout/AppNabBar";
import ListaInmuebles from "./components/views/ListaInmuebles";
import RegistrarUsuario from "./components/seguridad/RegistrarUsuario";
import Login from "./components/seguridad/Login";


function InmueblesApp() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNabBar />
        <Grid container>
          <Switch>
            <Route path="/" exact component={ListaInmuebles} />
            <Route path="/auth/registrar" exact component={RegistrarUsuario} />
            <Route path="/auth/login" exact component={Login} />
          </Switch>
        </Grid>
        {/*<ListaInmuebles />*/}
      </MuiThemeProvider>
    </Router>
  );
}

export default InmueblesApp;
