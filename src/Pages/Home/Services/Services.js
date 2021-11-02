import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae quod voluptatibus explicabo dolores laborum vel tempore, vero rem! Cupiditate, quidem laborum est dicta debitis quasi velit deleniti consectetur quod',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae quod voluptatibus explicabo dolores laborum vel tempore, vero rem! Cupiditate, quidem laborum est dicta debitis quasi velit deleniti consectetur quod',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae quod voluptatibus explicabo dolores laborum vel tempore, vero rem! Cupiditate, quidem laborum est dicta debitis quasi velit deleniti consectetur quod',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services; <h2>this is services</h2>