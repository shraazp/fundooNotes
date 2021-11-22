import React from 'react'
import "../css/form.css";
import accounts from "../assets/note.png"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import { Link } from '@mui/material';
import {useForm} from '../components/useForm';
import userPost from '../service/userRegister';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
const initialFValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    showPassword: false,
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
            ...temp
        })
       
        if (fieldValues === values) 
            return Object.values(temp).every(x => x === "")
    }
    const {
        values,
        errors,
        setValues,
        setErrors,
        handleInputChange
    } = useForm(initialFValues,true,validate);
    const data={firstName:values.firstname,lastName:values.lastname,password:values.password,email:values.email}
    
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
           userPost('users',data)
           
        }
    }
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
   
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
                    <form>
                        <div className="innerImg">
                            <div className="inputBox">
                                <div className="firstAndLast">
                                    <div className="firstName">
                                        <TextField required className="firstNameBox" label="First name" variant="outlined" size="small" name="firstname" 
                                            onChange={handleInputChange}
                                            error={
                                                !!errors.firstname
                                            }
                                            helperText={
                                                errors.firstname
                                            }
                                            />
                                    </div>
                                    <div className="lastName">
                                        <TextField required className="lastNameBox" label="Last name" variant="outlined" size="small" name="lastname"
                                            onChange={handleInputChange}
                                            error={
                                                !!errors.lastname
                                            }
                                            helperText={
                                                errors.lastname
                                            }/>

                                    </div>
                                </div>
                                <div className="emailId">
                                    <TextField required className="emailIdBox" fullWidth label="Email Id" size="small" autoComplete="email" placeholder="abc.123@example.com" name="email"
                                        onChange={handleInputChange}
                                        error={
                                            !!errors.email
                                        }
                                        helperText={
                                            errors.email
                                        }
                                        />
                                </div>
                                <div className="password">
                                    <div className="firstPassword">
                                    <FormControl>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                    required 
                                                    className="firstPasswordBox" 
                                                    size="small"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    name="password"
                                                    onChange={handleChange('password')&&handleInputChange}
                                                    error={
                                                        !!errors.password
                                                    }
                                                    
                                                    endAdornment={
                                                    <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                            >               
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                            </InputAdornment>
                                                    }
                                                    label="Password"
    
                                       />
                                       <FormHelperText >{errors.password}</FormHelperText>
                                        </FormControl>
                                    </div>
                                    <div className="confirm">
                                    <FormControl >
                                    <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
                                            <OutlinedInput
                                                    required 
                                                    className="firstPasswordBox" 
                                                    size="small"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.confirm}
                                                    name="confirm"
                                                    onChange={handleChange('password')&&handleInputChange}
                                                    error={
                                                        !!errors.confirm
                                                    }
                                                   
                                                    endAdornment={
                                                    <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                            >               
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                            </InputAdornment>
                                                    }
                                                    label="Confirm"
                                                   
                                       />
                                        <FormHelperText >{errors.confirm}</FormHelperText>
                                        </FormControl>
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
                                    <Link href="/">sign in instead</Link>
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
