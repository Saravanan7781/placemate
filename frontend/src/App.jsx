import React from 'react'
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import RegisterCompany from './components/RegisterCompany'

function App() {
  return (
    <div className="mainApp">
    <Router>
        <Routes>
          <Route path="/registerCompany" element={ <RegisterCompany />}>
          </Route>
         </Routes>
    </Router>
    </div>
  )
}

export default App