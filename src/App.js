import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChooseModul from "./components/ChooseModul";
import ModulList from "./components/ModulList";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<ModulList />}></Route>
          <Route index element={<ModulList />}></Route>
          <Route path="/modulList" element={<ModulList />}></Route>
          <Route path="/chooseModul" element={<ChooseModul />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
