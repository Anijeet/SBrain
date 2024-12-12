import Youtube from "./Pages/Youtube";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";

import SignUp from "./Pages/SignUp";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Twitter from "./Pages/Twitter";
import Text from "./Pages/Text";


function App() {


  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/youtube" element={<Youtube/>} />
      <Route path="/twitter" element={<Twitter/>} />
      <Route path="/text" element={<Text/>} />


      <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter> 
  
}

export default App;
