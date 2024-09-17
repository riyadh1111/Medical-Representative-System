import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import "../assets/css/ListReview.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const CreateModal = ({modalShow, handleCreateClose}) => {
    const navigate=useNavigate();
  return (
    <>
     <Modal show={modalShow} onHide={handleCreateClose} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
     <div className="row">
    <a href='#' className='clickable createReview text-center' onClick={()=>navigate("/newReview")}> Create</a>
    </div>
<hr />
<div className="row">
<a href='#' className='createReview text-center' onClick={()=>navigate("/newReview")}> Create</a></div>
<hr />
<div className="row">
<a href='#' className='createReview text-center' onClick={()=>navigate("/newReview")}> Create</a></div>
<hr />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCreateClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default CreateModal