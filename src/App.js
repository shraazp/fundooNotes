import './App.css';
import RegForm from './components/form'
import Login from './components/login'

import {BrowserRouter as Router,Route} from "react-router-dom" 
function App() {
  return (
    <div className="App">
      <Router>
       <Route path="/login">
            <Login /></Route>
            <Route path="/register">
              <RegForm/></Route>
     </Router>
    </div>
  );
}

export default App;
