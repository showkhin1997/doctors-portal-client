import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JwpeCIfJmn8bDmJRive3FGXkIBzzafXKyKYW1J6DJuFJmXDK3UUO5tOBpwNz5tpwmJPzux8t65nloo8CFG9PSCx00WLeuLL0X');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for: {appointment.name} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                ></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;