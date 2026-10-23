import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import AppTarefas from './pages/tarefas/AppTarefas'
import Sobre from './pages/Sobre'
import Usuarios from './pages/Usuarios'
import UsuarioDetalhe from './pages/UsuarioDetalhe'

function App() {


  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
              <li><Link to="/usuarios">Usuarios</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarefas/*" element={<AppTarefas />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/sobre" element={<Sobre />} />
          {/*Rota para detalhes do usuario*/}
          <Route path="/usuarios/:id" element={<UsuarioDetalhe />} />
          </Routes>
          </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
