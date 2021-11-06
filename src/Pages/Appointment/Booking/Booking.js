import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccessfull }) => {
    const [openBokking, setOpenBokking] = React.useState(false);
    const handleBookingOpen = () => setOpenBokking(true);
    const handleBookingClose = () => setOpenBokking(false);

    const { name, time, space } = booking

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACING AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                handleBookingClose={handleBookingClose}
                openBokking={openBokking}
                booking={booking}
                date={date}
                setBookingSuccessfull={setBookingSuccessfull}
            ></BookingModal>
        </>
    );
};

export default Booking;