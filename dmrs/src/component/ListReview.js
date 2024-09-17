import React from "react";
import "../assets/css/ListReview.css";
import { useState } from "react";
import CustumModel from "./CustumModel";
import { FaStar } from "react-icons/fa";
import CreateModal from "./CreateModal";
import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";


const ListReview = () => {
    const navigate=useNavigate();
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const handleCreateClose = () => setModalShow(false);
  const handleCreateShow = () =>setModalShow(true);

  return (
    
    <>
    <div className="mainclass">
    <div className="container">
        <div className="row mt-4">
        <div>
        <button className="btn btn-primary col-6 w-auto" onClick={()=>navigate("/")}>
            <span>
                <IoMdArrowRoundBack /> 
            </span>
            Back to Dashboard
            </button>
        </div>
        <div className="col-6 plusBtn" >
          <button className="btn btn-primary "  onClick={() => handleCreateShow()}>
            <span>+ </span>
             Create New Review
          </button>
        </div>
        </div>
       
      <div className="container listOfreview ">
      <div className="row ms-4 mt-3 mb-4">
        <div className="col-6 listHeading">
          <h1 className="listHeader">List of Reviews</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
        <div className="d-flex justify-content-center">
            <div class="card text-center" onClick={handleShow}>
              <div class="card-body">
                <a href="#" class="btn btn-primary">
                  Reviews
                </a>
                <div className="reviewBorder">
                <div className="d-flex justify-content-center gap-2 review">
                 <div className="mt-3"><FaStar color="yellow"/> </div>
                 <div className="mt-3"> 4.1</div>
                 
                  {/* <h5 class="card-title"><FaStar color="yellow"/> 4.5 </h5> */}
                </div>
                <p>120 Customer Rating</p>
                </div>

              </div>
            </div>
          </div> 
        </div >
        <div className="col-4">
        <div className="d-flex justify-content-center">
            <div class="card text-center" onClick={handleShow}>
              <div class="card-body">
                <a href="#" class="btn btn-primary">
                  Reviews
                </a>
                <div className="reviewBorder">
                <div className="d-flex justify-content-center gap-2 review">
                 <div className="mt-3"><FaStar color="yellow"/> </div>
                 <div className="mt-3"> 4.1</div>
                 
                  {/* <h5 class="card-title"><FaStar color="yellow"/> 4.5 </h5> */}
                </div>
                <p>120 Customer Rating</p>
                </div>

              </div>
            </div>
          </div> 
        </div>
        <div className="col-4">
        <div className="d-flex justify-content-center">
            <div class="card text-center" onClick={handleShow}>
              <div class="card-body">
                <a href="#" class="btn btn-primary">
                  Reviews
                </a>
                <div className="reviewBorder">
                <div className="d-flex justify-content-center gap-2 review">
                 <div className="mt-3"><FaStar color="yellow"/> </div>
                 <div className="mt-3"> 4.1</div>
                 
                  {/* <h5 class="card-title"><FaStar color="yellow"/> 4.5 </h5> */}
                </div>
                <p>120 Customer Rating</p>
                </div>

              </div>
            </div>
          </div> 
        </div>
        {show && <CustumModel show={show} handleClose={handleClose} />}
        {modalShow && <CreateModal modalShow={modalShow} handleCreateClose={handleCreateClose} />}
      </div>
      </div>
    </div>
    </div>
     
    </>
  );
};

export default ListReview;
