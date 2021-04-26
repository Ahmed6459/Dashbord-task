import { Modal } from "react-bootstrap";
import React from "react";
import {HiOutlineMailOpen} from "react-icons/hi"


import "./ConfirmationModel..css"

const ConfirmationModel = (props) => {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="model-confirmation"
      >
        <Modal.Body>
            <span className="icon d-inline-block">
                <HiOutlineMailOpen/>
            </span>
            <h4>Confirmation Email Sent</h4>
            <p>We sent a link to <a href="#">anthony2142@email.com</a> and <a href="#">jamesconor@email.com</a> jamesconor@email.com . Check the email to confirm the transfer.</p>
        </Modal.Body>
        <Modal.Footer bsPrefix="model-confirmation-footer">
            <span className="text-muted d-block">Didn’t get a confirmation email?</span>
            <span>Check your spam or <a href="/">Send Again</a></span>
      </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmationModel;
