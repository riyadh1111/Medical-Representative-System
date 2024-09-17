import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginButton = ({onClick}) => {
  const navigate= useNavigate();
  return (
    <>
    <button class="btn btn-primary w-100 Login-Button" type="submit" onClick={onClick}>Login</button>
    <div className='d-flex justify-content-center mb-5 mt-4 gap-2'>
      <div>
      <span>New on our platform?</span>
      </div>
      <div>
      <a  className='CreateAccount'>
          <span onClick={()=>navigate('signup')}>Create an account</span>
         </a>
      </div>
    </div>
    <div className='d-flex Login_Page-Icons justify-content-center gap-3'>
    <FaFacebookF color='#3b5998' />
    <FaTwitter color='#1da1f2'/>
    <FaGithub />
    <FaGoogle color='#dd4b39' />
    </div>
    </>
  )
}

export default LoginButton