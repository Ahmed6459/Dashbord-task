import { Modal } from "react-bootstrap";
import React from 'react'

import "./TransfairModel.css"
 const TransfairModel=(props) =>{
    return (
        <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="model-transfair"
    >
      <Modal.Header bsPrefix="model-transfair-header">
        <Modal.Title id="contained-modal-title-vcenter">
        Transfer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <span className="text-muted d-block">
                Transfer to
            </span>
            <input type="text" name="" id="" placeholder="Enter the email address"/>
      </Modal.Body>
      <Modal.Footer bsPrefix="model-transfair-footer">
        <button onClick={props.onHide} style={{background:"#2E325C"}}>Cancel</button>
        <button onClick={props.onHide}>Send</button>
      </Modal.Footer>
    </Modal>
    )
}

export default TransfairModel;
