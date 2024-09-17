import React from "react";
import { MdError } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const Input = ({label, labelName, placeholder,type,onchange,value, flag, errormsg, maxLength, error }) => {

  return (
    <>
   <div className="allInput mb-3">
   <label for="exampleFormControlInput1" class="form-label">{labelName}</label>


  <input type={type} class="form-control " id="exampleFormControlInput1" placeholder={placeholder} onChange={onchange} value={value} maxLength={maxLength} />
  
  {flag && (
      <div className="errorIcon mx-1 d-flex gap-1" >
           <div><MdError /></div>
          <div >{errormsg}</div> 
           </div>
      )}
    </div>
    </>
     );
};

export default Input;
