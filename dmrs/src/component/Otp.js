import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { saveOtp } from "../store/store/Reducers/testSlice";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { apiHandler } from "../assets/api";
import { endpoint } from "../assets/api/endpoint";
import { BallTriangle, Circles, ColorRing, Hearts } from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';


const Otp = () => {
    const navigate=useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState("");
  const [newPass, setnewPass] = useState("");
  const [user1Otp, set1Otp] = useState("");
  const [user2Otp, set2Otp] = useState("");
  const [user3Otp, set3Otp] = useState("");
  const [user4Otp, set4Otp] = useState("");
  console.log("shdsahdhsad", user1Otp + user2Otp)

  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateOtp = () => {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|in|co\.in|co)$/;
    const checkOtp = /^[0-9]{1}$/;
    if (!emailPattern.test(userEmail)) {
      setFlag(true);
      toast.error("Invalid email address");
      return false;
    }
    if (newPass.length !== 8) {
      setFlag(true);
      toast.error("Password must be exactly 8 characters");
      return false;
    }
    if (!checkOtp.test(user1Otp)) {
      setFlag(true);
      toast.error("invalid OTP");
      return false;
    }
    if (!checkOtp.test(user2Otp)) {
      setFlag(true);
      toast.error("invalid OTP");
      return false;
    }
    if (!checkOtp.test(user3Otp)) {
      setFlag(true);
      toast.error("invalid OTP");
      return false;
    }
    if (!checkOtp.test(user4Otp)) {
      setFlag(true);
      toast.error("invalid OTP");
      return false;
    }
    return true;
  };

  const OtpSubmit = async () => {
    if (!validateOtp()) {
      return;
    }
    console.log("submitted")

    setLoading(true);
    const data = {
      email: userEmail,
      otp: user1Otp + user2Otp+ user3Otp+ user4Otp,
      newPassword: newPass,
    };
    const result = await apiHandler({
      url: endpoint.OTP,
      method: "POST",
      data: data,
    });
    if (result.data) {
      console.log("otp", result.data?.otp);
      dispatch(saveOtp(result.data?.otp));
      navigate("/another");
    } else {
      setLoading(false);
      toast.error("Submit failed");
    }
  };
  const handleInput1 = (e) => {
    const value= e.target.value;
 if (/^\d$/.test(value))
   { set1Otp(value); }
}

  
  
  return (
    <>
      <div className="Login-Page">
        <div className="d-flex align-items-center justify-content-center">
          <div className="card">
            <div className="card-body otp-Inner-card">
              <div className="d-flex justify-content-center gap-2">
                <div className="Login_Page-Logo">
                  <SiGmail color="#9868ff" className="logo" />
                </div>
                <div>
                  <h5 className="card-title Heading">Materio</h5>
                </div>
              </div>
              <div className="card-text mt-3 mailIcon text-center mb-2">
                <MdMarkEmailRead color="#8c57ff" />
              </div>
              <Input
                labelName="Email"
                flag={flag}
                errormsg="invalid email address"
                label="Email"
                placeholder="Email"
                type="email"
                onchange={(e) => setEmail(e.target.value)}
                value={userEmail}
                className="otpEmail"
              />
              <form action="#" className="mb-2  ">
              <label htmlFor="">OTP</label>
                <div className="group otpBox d-flex gap-4 justify-content-center " >
                  <Input onchange={(e) => handleInput1(e)}  maxLength="1" type="number"/>
                  <Input onchange={(e) =>  handleInput1(e)} maxLength="1" type="number"disabled />
                  <Input onchange={(e) =>  handleInput1(e)} maxLength="1" type="number" disabled />
                  <Input onchange={(e) =>  handleInput1(e)} maxLength="1" type="number" disabled />
                
                </div>
              </form>
              
              <Input
              labelName="Password"
                flag={flag}
                errormsg="invalid password"
                label="Password"
                placeholder="Password"
                type="password"
                onchange={(e) => setnewPass(e.target.value)}
                value={newPass}
                className="otpEmail"
              />
              
              
              
              <div className="d-flex gap-5 justify-content-center">
                <button className="btn cancelButton px-4">Cancel</button>
                <button onClick={()=>OtpSubmit()} className="btn btn-primary px-4 ">Verify</button>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
               <div className="d-flex loadericon justify-content-center align-items-center position-fixed top-0 ">
               <Circles color="black" height={60} width={60} />
             </div>
        ) : null}
      </div>
      {loading ? (
               <div className="d-flex loadericon justify-content-center align-items-center position-fixed top-0 ">
               <Circles color="black" height={60} width={60} />
             </div>
        ) : null}
      <div className="login-Page-Image">
        <div className="d-flex justify-content-between ps-5 pe-5 pb-5">
          <div className="left-Img">
            <img
              className="left-Imges"
              src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/tree-3.png"
              alt=""
            />
          </div>
          <div className="right-img">
            <img
              className="right-Imges"
              src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/tree.png"
              alt=""
            />
          </div>
          <div className="buynow">
            <a
              href="https://themeselection.com/item/materio-dashboard-pro-bootstrap/"
              target="blank"
              className="btn btn-danger btn-buynow"
            >
              Buy Now
            </a>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Otp;
