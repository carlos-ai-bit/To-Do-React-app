import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignUp from "./Components/SignUp";
// import Login from "./Components/Login";
import View from "./Components/View";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignUp />} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
