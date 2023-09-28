import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<SignUp />}/>
        <Route  path="/success" element={<Success />}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
