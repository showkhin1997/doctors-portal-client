import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../../images/chair.png';
import bg from '../../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,
    }
    const verticalcenter = {
        display: 'flex',
        height: 400,
        alignItems: 'center'
    }
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalcenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et suscipit amet ipsum obcaecati illum in cupiditate itaque autem, dolor repellendus neque ipsam praesentium delectus labore reiciendis explicabo sit, repudiandae nobis!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalcenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;