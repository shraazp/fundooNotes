import './App.css';
import RegForm from './pages/Form'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard';

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
                <Route path="/dashboard"exact><Dashboard/></Route>
                
            </Router>
        </div>
    );
}

export default App;
