import React from 'react'
import Button from "@mui/material/Button";
import {useForm} from '../components/useForm';
import userPost from '../service/userRegister';
import {Grid, Paper} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

const initialFValues = {
    password: "",
    confirm: "",
    showPassword: false,
}

export default function ResetPassword(){
    const validate = (fieldValues = values) => {
        let temp = {
            ...errors
        }
        if ('password' in fieldValues) 
            temp.password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(fieldValues.password) ? "" : "Minimum 8 characterss required."
        if ('confirm' in fieldValues) {
            temp.confirm = fieldValues.confirm===values.password ? "" : "Should match with the password given"
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
        setValues,
        setErrors,
        handleInputChange
    } = useForm(initialFValues,true,validate);
    const data={password:values.password}
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
           userPost(`users/${window.location.pathname}`,data);
           alert("Succefully reset password")
           window.location="/login"
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
      const paperStyle = {
        padding: "48px 40px 36px",
        height: 416,
        width: 368,
        margin: "20px auto"
    }
    const btnstyle = {
        margin: '8px 0'
    }
return(
    <Grid>        
    <Paper elevation={10}
        style={paperStyle}>
        <Grid align='center'>
            <span className="fundooNotesLogo">FundooNotes</span>
            <h3>Please enter new password</h3>    
        </Grid>
        <br/>
        <form onSubmit={handleSubmit}>
        <FormControl >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                required  
                size="small"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onChange={handleChange('password')&&handleInputChange}
                error={ !!errors.password }
                endAdornment={<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">               
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>}
                            label="Password" />
            <FormHelperText >{errors.password}</FormHelperText>
            </FormControl>
            <br/><br/>
            <FormControl >
                <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
                <OutlinedInput
                    required 
                    size="small"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.confirm}
                    name="confirm"
                    onChange={handleChange('password')&&handleInputChange}
                    error={!!errors.confirm }
                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end">           
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                 }
                    label="Confirm" />
            <FormHelperText >{errors.confirm}</FormHelperText>
            </FormControl>
            <br/><br/>
            <Button variant="contained"
                    style={btnstyle}
                    onClick={handleSubmit}>Reset</Button>
          
        </form>
    </Paper>
</Grid>
)
}