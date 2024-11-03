import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'
import ListarUsuarios from "./pages/Listar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <header className="bg-blue-500 p-6 text-white font-bold text-center text-4xl">
        <h1>Sistema de Cadastro de Usuários</h1>
      </header>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listar" element={<ListarUsuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
