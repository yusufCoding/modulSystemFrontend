import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChooseModul from "./components/ChooseModul";
import ModulList from "./components/ModulList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
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
