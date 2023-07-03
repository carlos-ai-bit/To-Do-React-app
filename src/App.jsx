import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignUp />} /> */}
        <Route path="/" element={<Login />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
