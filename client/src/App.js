import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AdminTakeCall from './components/pages/AdminTakeCall';
// import Intervention from './components/pages/Intervention';
import LoginForm from './components/auth/LoginForm';
import Alerts from './components/layout/alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';
// import 'fontawesome'
import './App.css';

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container-fluid'>
              <Alerts />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <PrivateRoute exact path='/admintakecall' component={AdminTakeCall} />
                {/* <PrivateRoute exact path='/intervention' component={Intervention} /> */}
                <Route exact path='/login' component={LoginForm} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
