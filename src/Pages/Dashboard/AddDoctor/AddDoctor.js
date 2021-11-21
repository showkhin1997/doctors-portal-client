import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';


const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleOnSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);


        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully!')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>Add a docotr</h2>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type='email'
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <Input accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;