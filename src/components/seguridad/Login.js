import { Container, Typography, TextField, Avatar, Grid, Button } from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';
import React, { Component } from 'react';


const style = {
    paper: {
        marginTop: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 5,
        backgroundColor: "#e53935"
    },
    form: {
        width: "100%",
        marginTop: 8
    },
    submit: {
        marginTop: 15,
        marginBottom: 20
    }
}


class Login extends Component {


    state = {
        firebase: null,
        usuario: {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Container maxWidth="md">
            <div style={style.paper}>
              <Avatar style={style.avatar}>
                <LockOutLineIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Registre su Cuenta
              </Typography>
              <form style={style.form}>
                    <TextField
                      variant = "outlined"
                      name="email"
                      onChange={this.onChange}
                      value={this.state.usuario.email}
                      fullWidth
                      label="Ingrese su e-mail"
                      margin="normal"
                    />
                    <TextField
                      type="password"
                      name="password"
                      variant = "outlined"
                      onChange={this.onChange}
                      value={this.state.usuario.password}
                      fullWidth
                      label="Ingrese su password"
                      margin="normal"
                    />
                    <Button
                      type="submit"
                      onClick={this.registrarUsuario}
                      variant="contained"
                      fullWidth
                      size="large"
                      color="primary"
                      style={style.submit}
                    >
                      Iniciar Sesion
                    </Button>
              </form>
            </div>
          </Container>
        );
    }
}

export default Login;