import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
