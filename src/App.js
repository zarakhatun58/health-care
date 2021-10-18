import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/NotFound/NotFound';

import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import DoctorDetails from './Pages/Details/DoctorDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctorDetails/:serviceId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/register"><Register></Register></Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
