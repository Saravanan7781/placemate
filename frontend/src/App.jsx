import React from 'react'
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import RegisterCompany from './components/RegisterCompany/RegisterCompany'
import Home from './pages/Home'

function App() {
  return (
    <div className="mainApp">
    <Router>
        <Routes>
          <Route path="/registerCompany" element={ <RegisterCompany />}>
          </Route>
          <Route path="/home" element={<Home/> }>

          </Route>
         </Routes>
    </Router>
    </div>
  )
}

export default App