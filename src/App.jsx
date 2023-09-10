import Home from "./components/Home";
import RecoverPassword from "./components/RecoverPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MissingPage from "./components/MissingPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/recoverpassword" element={<RecoverPassword/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="*" element={<MissingPage/>}/>
  </Routes>
  </>;
}

export default App;
