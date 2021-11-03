import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointmetns from '../AvailableAppointments/AvailableAppointmetns';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader
                date={date}
                setDate={setDate}
            ></AppointmentHeader>
            <AvailableAppointmetns
                date={date}
            ></AvailableAppointmetns>
        </div>
    );
};

export default Appointment;