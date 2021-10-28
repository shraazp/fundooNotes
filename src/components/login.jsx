import React from 'react'
import "../css/form.css";
import accounts from "../assets/note.png"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from './useForm';
import { Link } from '@mui/material';
const initialFValues = {
   email:"",
   password:""
   
}


export default function  Login()  {
    const validate = (fieldValues = values) => {
        
        let temp = { ...errors }
        if ('email' in fieldValues)
            temp.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('password' in fieldValues)
           { 
               temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characterss required."
            }
        setErrors({
            ...temp
        })
    
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    
    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);
    
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            console.log("good to go")
            resetForm()
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
                                <span className="createAccount">Sign in to continue</span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="innerImg">
                                    <div className="inputBox">
                                       
                                        <div className="emailId">
                                            <TextField  required className="emailIdBox" fullWidth label="Email Id" size="small" autoComplete="email" placeholder="abc.123@example.com"
                                              name="email"
                                              value={values.email}
                                              onChange={handleInputChange}
                                              error={errors.email}
                                              helperText={errors.email}/>  
                                        
                                        </div>
                                        <br/>
                                        <div className="password">
                                            
                                                <TextField type="password" required className="firstPasswordBox" label="Password" variant="outlined" fullWidth size="small"
                                                 name="password"
                                                 value={values.password}
                                                 onChange={handleInputChange}
                                                 error={errors.password}
                                                 helperText={errors.password}/>
                                        </div>
                                      
                                       
                                        <div className="signInSignUp">
                                            <div className="create">
                                                <Link href="/register">Are you new to Fundoos notes</Link>
                                            </div>
                                            <div className="Login">
                                                <Button variant="contained">Login</Button>
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
