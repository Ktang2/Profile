import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
