import React from 'react'
import Home from '../../../pages/Home/Home'
import Loginpage from '../../../pages/login/loginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Approutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Loginpage/>}/>
            </Routes>
        </Router>
    )
}

export default Approutes