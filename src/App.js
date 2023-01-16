
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListasDeUsuarios from './components/ListasDeUsuarios';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgregarUsuarios from './components/AgregarUsuarios';
import EditarUsuario from './components/EditarUsuario';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      

        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home/>} exact></Route>
            <Route path='/listadeusuarios' element={<ListasDeUsuarios/>} exact></Route>
            <Route path='/agregarusuario' element={<AgregarUsuarios />} exact></Route>
            <Route path='/editarusuario/:codigo' element={<EditarUsuario />} exact></Route>
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
