import React from "react";
import Card from "../Card";
import { AiFillEyeInvisible } from "react-icons/ai";

import "./License.css";
import ConfirmationModel from "../modelsComponents/ConfirmationModel";

const License = (props) => {
  return (
      <>
    <Card className="right-card-with-icon" minWidth="26rem" minHeight="240px">
      <div className="licen">
        <div class="row align-items-center justify-content-center mt-3">
          <div class="col">
            <h6 className="text-muted">License key</h6>
            <h5 class="m-0 num">xxxx - xxxx - xxxx - xxxx</h5>
          </div>
          <div class="col-auto">
            <AiFillEyeInvisible />
          </div>
        </div>
        <div className="row align-items-center justify-content-center mt-3">
          <div className="col">
            <button className="btn acrivated-btn" variant="primary" onClick={() => props.setConfirmModelShow(true)} >
              <span className="float-left">Renew Now</span>
              <span className="float-right">Stripe</span>
            </button>
          </div>
          <div class="col-auto">
            <button className="deactivate-btn" style={{ color: "#EC4165", background: "#323662" }}>
              Deactive
            </button>
          </div>
        </div>
        <h6 className="mt-4" style={{fontSize:"0.7rem"}}>Next Renewal on 22 Mar 2021</h6>
      </div>
    </Card>
    <ConfirmationModel
        show={props.confirmModelShow}
        onHide={() => props.setConfirmModelShow(false)}
      />
      </>
  );
};

export default License;
