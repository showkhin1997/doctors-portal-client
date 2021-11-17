import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminForm = e => {
        const user = { email }
        fetch('https://fast-taiga-40321.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer  ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminForm}>
                <TextField
                    sx={{ width: '50%' }}
                    label="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin Successfully!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;