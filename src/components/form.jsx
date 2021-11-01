import React from 'react'
import "../css/form.css";
import accounts from "../assets/note.png"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from '@mui/material';
import {useForm} from './useForm';
import userConnect from '../service/userRegister';
const initialFValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: ""
}
export default function RegForm() {
    
      
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if ('firstname' in fieldValues) 
            temp.firstname = fieldValues.firstname ? "" : "This field is required."
        if ('lastname' in fieldValues) 
            temp.lastname = fieldValues.lastname ? "" : "This field is required."
        if ('email' in fieldValues) 
            temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('password' in fieldValues) 
            temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characterss required."
        if ('confirm' in fieldValues) {
            temp.confirm = fieldValues.confirm===values.password ? "" : "Should match with the password given"
        }
        setErrors({
            // eslint-disable-next-line
            ... temp
        })
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
    } = useForm(initialFValues, true, validate);
const data={firstName:values.firstname,lastName:values.lastname,password:values.password,email:values.email}
    
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
           userConnect('users',data)
        }
    }
   
    
    return (
        <div className="imgBox">
            <div className="outerBox">
                <div className="outerPadding">
                    <div>
                        <span className="fundooNotesRainbow">FundooNotes</span>
                    </div>
                    <div className="createAccountDiv">
                        <span className="createAccount">Welcome to fundoo notes</span>
                        <br/><br/>
                        <span className='createAccount'>Create your Fundoos account
                        </span>
                    </div>
                    <form >
                        <div className="innerImg">
                            <div className="inputBox">
                                <div className="firstAndLast">
                                    <div className="firstName">
                                        <TextField required className="firstNameBox" label="First name" variant="outlined" size="small" name="firstname"
                                            value={
                                                values.firstname
                                            }
                                            onChange={handleInputChange}
                                            error={
                                                errors.firstname
                                            }
                                            helperText={
                                                errors.firstname
                                            }/>
                                    </div>
                                    <div className="lastName">
                                        <TextField required className="lastNameBox" label="Last name" variant="outlined" size="small" name="lastname"
                                            value={
                                                values.lastname
                                            }
                                            onChange={handleInputChange}
                                            error={
                                                errors.lastname
                                            }
                                            helperText={
                                                errors.lastname
                                            }/>

                                    </div>
                                </div>
                                <div className="emailId">
                                    <TextField required className="emailIdBox" fullWidth label="Email Id" size="small" autoComplete="email" placeholder="abc.123@example.com" name="email"
                                        value={
                                            values.email
                                        }
                                        onChange={handleInputChange}
                                        error={
                                            errors.email
                                        }
                                        helperText={
                                            errors.email
                                        }/>
                                </div>
                                <div className="password">
                                    <div className="firstPassword">
                                        <TextField type="password" required className="firstPasswordBox" label="Password" variant="outlined" size="small" name="password"
                                            
                                            value={
                                                values.password
                                            }
                                            onChange={handleInputChange}
                                            error={
                                                errors.password
                                            }
                                            helperText={
                                                errors.password
                                            }/>
                                    </div>
                                    <div className="confirm">
                                        <TextField type="password" required className="confirmBox" label="Confirm" variant="outlined" size="small" name="confirm"
                                            value={
                                                values.confirm
                                            }
                                            onChange={handleInputChange}
                                            error={
                                                errors.confirm
                                            }
                                            helperText={
                                                errors.confirm
                                            }/>
                                    </div>
                                </div>
                                <div className="passwordInfo">
                                    <span>
                                        Use 8 or more characters with a mix of letters, numbers &
                                                                                                                                                                                              symbols
                                    </span>
                                </div>

                                <div className="signInSignUp">
                                    <div className="signIn">
                                    <Link href="/login">sign in instead</Link>
                                    </div>
                                    <div className="signUp">
                                        <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="img">
                                <img src={accounts}
                                    alt="note icon"
                                    width={260}
                                    height={244}
                                    style={
                                        {verticalAlign: 'middle'}
                                    }/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
