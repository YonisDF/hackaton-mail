import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-dom'
import Welcome from './pages/Welcome'
import Header from './components/Header'
import Blacklist from './pages/Blacklist'
import Quarantine from './pages/Quarantine'
import Whitelist from './pages/Whitelist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/blacklist" element={<Blacklist />} />
        <Route path="/quarantine" element={<Quarantine />} />
        <Route path="/whitelist" element={<Whitelist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
