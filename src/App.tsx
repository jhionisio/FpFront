import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { RequireAuth } from './components/AuthProvider'
import DefaultLayout from './layout/DefaultLayout'
import Home from './views/home/Home'

//Define the inside route
const Login = React.lazy(() => import('./views/auth/login/Login'))
const SignUp = React.lazy(() => import('./views/auth/register/SignUp'))

//Expose only the unsecured routes
class App extends Component {
  render(): JSX.Element {
    return (
      <HashRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
