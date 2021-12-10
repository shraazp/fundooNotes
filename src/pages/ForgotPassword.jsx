import React from 'react'
import "../css/login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Grid, Paper} from '@material-ui/core';
import {useForm} from '../components/useForm';
import userPost from '../service/userRegister';

import {Link} from '@mui/material';
const initialFValues = {
    email: ""
}
export default function ForgotPassword() {
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if ('email' in fieldValues) 
            temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(fieldValues.email) ? "" : "Email is not valid."
        
        setErrors({
            ...temp
        })
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
        
    }

    const {values, errors, setErrors, handleInputChange} = useForm(initialFValues, true, validate);
    const data = {
        email: values.email
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            userPost('users/forgot', data).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    const paperStyle = {
        padding: "48px 40px 36px",
        height: 416,
        width: 368,
        margin: "20px auto"
    }
    const btnstyle = {
        margin: '8px 0'
    }
    return (
        
        <Grid className="forgot-password">
            
            <Paper elevation={10}
                style={paperStyle}>
                <Grid align='center'>
                    <span className="fundooNotesLogo">FundooNotes</span>
                    <h2>Find your email</h2>
                    <h3>Enter your email</h3>
                </Grid>
                <form>
                    <TextField required className="emailIdBox" fullWidth label="Email Id" size="small" autoComplete="email" placeholder="abc.123@example.com" name="email"
                        value={
                            values.email
                        }
                        onChange={handleInputChange}
                        error={
                            !!errors.email
                        }
                        helperText={
                            errors.email
                        }/>

                    <div className="createAndLogin">
                    <div className="createUser">
                        <br/>
                            <Link href="/">Back</Link>
                        </div>
                        <Button variant="contained"
                            style={btnstyle}
                            onClick={handleSubmit}>Next</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    );
}
