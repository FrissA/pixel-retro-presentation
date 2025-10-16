import { Routes, Route, Navigate } from 'react-router-dom'
import { Presentation } from './components/Presentation'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/slide/:slideNumber" element={<Presentation />} />
      <Route path="/" element={<Navigate to="/slide/1" replace />} />
      <Route path="*" element={<Navigate to="/slide/1" replace />} />
    </Routes>
  )
}

export default App
