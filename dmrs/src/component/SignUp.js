import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import Input from "./Input";
import LoginButton from "./LoginButton";
import { Navigate, useNavigate } from "react-router-dom";
import { endpoint } from "../assets/api/endpoint";
import { apiHandler } from "../assets/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BallTriangle, Circles, ColorRing, Hearts } from "react-loader-spinner";

const SignUp = () => {
  const [userName, setName] = useState("");
  const [userId, setId] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail2] = useState("");

  const navigate = useNavigate();

  const handleNameValidation = (e) => {
    const value = e.target.value;
    const namePattern = /^[A-Za-z]*$/;

    if (namePattern.test(value)) {
      setFlag1(false);
      setName(value);
    } else {
      setFlag1(true);
    }
  };

  const handleUIdValidation = (e) => {
    const value = e.target.value;
    const userIdPattern = /^[a-zA-Z0-9]*$/;

    if (userIdPattern.test(value)) {
      setFlag2(false);
      setId(value);
    } else {
      setFlag2(true);
    }
  };

  const handleEmailValidation = (e) => {
    const value = e.target.value;
    setEmail(value);
    var emailPattern = /(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
        if (emailPattern.test(value)) {
      setFlag3(false);
    } else {
      setFlag3(true);
    }
  };

  const handlePassValidation = (e) => {
    const value = e.target.value;
    // setPass(value);
    const passPattern =  /^[a-zA-Z0-9]*$/;
    // const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/;

    if (passPattern.test(value)) {
      setFlag4(false);
      setPass(value);
    } else {
      setFlag4(true);
    }
  };

  const Submit = async () => {
    setLoading(true);
    const data = {
      name: userName,
      username: userId,
      email: userEmail,
      password: userPass,
    };
    const result = await apiHandler({
      url: endpoint.SIGN_UP,
      method: "POST",
      data: data,
    });
    if (result.data) {
      toast.success("submit");
      navigate("/another");
    } else {
      setLoading(false);
      toast.error("not submit");
    }
    console.log("Result", result && result.data.token);
  };
  return (
    <>
      <div className="Login-Page">
        <div className="d-flex align-items-center justify-content-center">
          <div class="card ">
            <div class="card-body Login-Inner-card">
              <div className="d-flex justify-content-center  gap-2">
                <div className="Login_Page-Logo">
                  <SiGmail color="#9868ff" className="logo" />
                </div>
                <div>
                  <h5 class="card-title Heading">Materio</h5>
                </div>
              </div>
              <p class="card-text mt-3">
                <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
              </p>
              <p>Please sign-in to your account and start the adventure</p>
              <Input
                flag={flag1}
                errormsg="Name should only contains character"
                label="Name"
                placeholder="Name"
                type="text"
                value={userName}
                onchange={(e) => handleNameValidation(e)}
              />
              <Input
                flag={flag2}
                errormsg="username is invalid"
                label="Username"
                placeholder="Username"
                type="text"
                value={userId}
                onchange={(e) => handleUIdValidation(e)}
              />
              <Input
                flag={flag3}
                errormsg="email is invalid"
                label="Email"
                placeholder="Email"
                type="Email"
                value={userEmail}
                onchange={(e) => handleEmailValidation(e)}
              />
              <Input
                flag={flag4}
                errormsg="password must contains 8 character"
                label="Password"
                placeholder="Password"
                type="password"
                value={userPass}
                onchange={(e) => handlePassValidation(e)}
              />

              <button
                className="btn btn-primary w-100 Login-Button"
                type="submit"
                onClick={() => Submit()}
              >
                Sign Up
              </button>
              <div className="d-flex justify-content-center mb-5 mt-4 gap-2">
                <div>
                  <span>Already have an account?</span>
                </div>
                <div>
                  <a className="CreateAccount">
                    <span onClick={() => navigate("/")}>
                      Sign in instead
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              className=" right-Imges"
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

export default SignUp;
