import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute'
import Welcome from './pages/Welcome'
import PublicRoutes from './components/PublicRoutes'

function App() {

  const [userLogged, setUserLogged] = useState(false)
  const [emailValue, setEmailValue] = useState("")

  return (
    <>
      <Routes>

        <Route element={<PublicRoutes userLogged={userLogged} />}>

          <Route path="/login" element={<Login
            setUserLogged={setUserLogged}
            setEmailValue={setEmailValue}
          />}
          />

        </Route>

        <Route element={<PrivateRoute userLogged={userLogged} emailValue={emailValue} />}  >
          <Route path='/' element={<Welcome
            setUserLogged={setUserLogged}
            emailValue={emailValue}
          />}
          />

        </Route>

      </Routes>
    </>
  )
}

export default App
