import React from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from '../views/loginPage/Login'
import Register from '../views/registerPage/Register'

function Routers() {
  return (
     <Router>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
     </Router>
  )
}

export default Routers