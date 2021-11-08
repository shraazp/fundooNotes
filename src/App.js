import './App.css';
import RegForm from './components/Form'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/login">
                    <Login/></Route>
                <Route path="/register">
                    <RegForm/></Route>
                <Route path="/forgot"><ForgotPassword/></Route>
                <Route path="/reset"><ResetPassword/></Route>
            </Router>
        </div>
    );
}

export default App;
