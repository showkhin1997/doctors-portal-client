import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChnage = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not matched');
            return;
        }
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChnage}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnChnage}
                            type="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-Type Password"
                            name="password2"
                            onChange={handleOnChnage}
                            type="password"
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Register</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;