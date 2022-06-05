import { Home } from "./components"
import { Login } from "./components"
import { Signup } from "./components";
import { MainPage } from "./components";
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/home' element={<MainPage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
