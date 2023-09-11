import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Cadastro from "./pages/cadastro/cadastro";
import Principal from "./pages/principal/principal";
import Login from "./pages/Login/login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
