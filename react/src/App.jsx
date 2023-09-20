import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import Banner from './components/parts-website/Banner'
import { Routes,Route } from 'react-router-dom'
import Contact from './components/pages/Contact'
import AllJobs from './components/pages/AllJobs'
import JobDetail from './components/pages/JobDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}>

          </Route>

          <Route path='/empleos' element={<AllJobs/>}>

          </Route>

          <Route path='/descripcion-puesto/:jobId' element={<JobDetail/>}>

          </Route>

          <Route path='/contacto' element={<Contact/>}>

          </Route>
      </Routes>
    </>
  )
}

export default App
