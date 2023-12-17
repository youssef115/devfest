import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
