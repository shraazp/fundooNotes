import React from 'react'
import "../css/login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useForm} from '../components/useForm';
import {Link} from '@mui/material';
import userPost from '../service/userRegister';
import {Grid, Paper} from '@material-ui/core';
import {Redirect } from 'react-router-dom'

const initialFValues = {
    email: "",
    password: ""
}
export default function Login() {
 const  [success,setSuccess]=React.useState(false)
    const validate = (fieldValues = values) => {
        let temp = {
            // eslint-disable-next-line
            ...errors
        }
        if ('email' in fieldValues) 
            temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('password' in fieldValues) {
            temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characterss required."
        }
        setErrors({
            // eslint-disable-next-line
            ...temp
        })
        
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
    }

    const {values, errors, setErrors, handleInputChange} = useForm(initialFValues, true, validate);
    const data = {
        email: values.email,
        password: values.password
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            userPost('users/login', data)
            setSuccess(true)
           
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
       
        <Grid>
           
            <Paper elevation={10}
                style={paperStyle}>
                <Grid align='center'>
                    <span className="fundooNotesLogo">FundooNotes</span>
                    <h2>Welcome to fundoo notes</h2>
                    <h3>Sign in to continue</h3>
                </Grid>
                <form onSubmit={handleSubmit}>
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
                    <br/><br/>
                    <TextField type="password" required className="firstPasswordBox" label="Password" variant="outlined" fullWidth size="small" name="password"
                        value={
                            values.password
                        }
                        onChange={handleInputChange}
                        error={
                            !!errors.password
                        }
                        helperText={
                            errors.password
                        }/>
                    <br/><br/>
                    <div className="forgotPassword">
                        <Link href="/forgot">Forgot password??</Link>
                    </div>
                   
                    <div className="createAndLogin">
                        <div className="createUser">
                            <Link href="/register">Create account</Link>
                        </div>

                        <Button variant="contained"
                            style={btnstyle}
                            onClick={handleSubmit}>Login</Button>
                    </div>
                </form>
                {success?<Redirect to="/dashboard"/>:null}
            </Paper>
        </Grid>
    );
}
