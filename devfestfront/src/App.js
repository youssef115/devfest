import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
