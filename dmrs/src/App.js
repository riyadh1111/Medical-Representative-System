import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";

import Forgot from "./component/Forgot";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AnotherPage from "./component/AnotherPage";
import Otp from "./component/Otp";
import Dashboard from "./component/Dashboard";
import ListReview from "./component/ListReview";
import CreateReview from "./component/CreateReview";



function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/listOfReview" element={<ListReview/>}/>
          <Route path="newReview" element={<CreateReview/>}/>
            <Route path="signup" element={<SignUp />}/>
            <Route path="forget" element={<Forgot />}  />
            <Route path="/another" element={<AnotherPage/>} />
            <Route path="/otp" element={<Otp/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}


export default App;
