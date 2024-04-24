import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './Pages/home/Home'
import Signup from './Pages/signup/Signup'
import Login from './Pages/login/Login'
import Navbar from './components/Navbar/Navbar'

import { useAuthContext } from './hooks/useAuthContext'

const App = () => {

  const { authIsReady, user } = useAuthContext();
  return (
    <div className='App'>
      {
        authIsReady &&
        <Router>
          <Navbar />
          <Switch>

            <Route exact path="/" >
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/signup">
              {!user ? <Signup /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>

          </Switch>

        </Router>
      }

    </div>
  )
}

export default App
