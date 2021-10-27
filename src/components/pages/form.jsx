import React from "react";
import "../css/form.css";
import accounts from "../assets/download.png"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
export class Form extends React.Component {
    render() {
        return (
            <div className="imgBox">
                <div className="outerBox">
                    <div className="outerPadding">
                        <div>
                                <span className="fundooNotesRainbow">FundooNotes</span>
                            </div>
                            <div className="createAccountDiv">
                                <span className="createAccount">Welcome to fundoo notes</span>
                            </div>
                            <form>
                                <div className="innerImg">
                                    <div className="inputBox">
                                        <div className="firstAndLast">
                                            <div className="firstName">
                                                <TextField required className="firstNameBox" label="First name" variant="outlined" size="small"/>
                                            </div>
                                            <div className="lastName">
                                                <TextField required className="lastNameBox" label="Last name" variant="outlined" size="small"/>
                                            </div>
                                        </div>
                                        <div className="emailId">
                                            <TextField helperText="You can enter letters, numbers and periods" required className="emailIdBox" fullWidth label="Email Id" size="small" autoComplete="email" placeholder="abc.123@example.com"
                                               
                                            />
                                        </div>
                                        <div className="password">
                                            <div className="firstPassword">
                                                <TextField type="password" required className="firstPasswordBox" label="Password" variant="outlined" size="small"/>
                                            </div>
                                            <div className="confirm">
                                                <TextField type="password" required className="confirmBox" label="Confirm" variant="outlined" size="small"/>
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
                                                <span>Sign in instead</span>
                                            </div>
                                            <div className="signUp">
                                                <Button variant="contained">Sign Up</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img">
                                        <img src={accounts}
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
}
