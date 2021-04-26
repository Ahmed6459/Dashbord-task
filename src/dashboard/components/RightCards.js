import React from "react";
import Card from "./Card";
import { FaDiscord, FaApple, FaWindows } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { GoDesktopDownload } from "react-icons/go";
import License from "./RightCardComponents/License";

import "./RightCards.css";
import TransfairModel from "./modelsComponents/TransfairModel";

const RightCards = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [confirmModelShow, setConfirmModelShow] = React.useState(false);

  return (
    <>
      <div className="right-card container">
        <div className="row mb-2">
          <License  confirmModelShow={confirmModelShow} setConfirmModelShow={setConfirmModelShow}/>
        </div>
        <div className="row mb-2">
          <Card minWidth="26rem" minHeight="97px">
            <div class="row d-flex align-items-center">
              <div class="col-7">
                <FaDiscord style={{ color: "#01A9F4", margin: "0.5rem" }} />
                <h3 className="d-inline">Discord ID</h3>
                <br />
                <span>antony#2142</span>
              </div>
              <div class="col">
                <button
                  className="deactivate-btn"
                  style={{ color: "#EC4165", background: "#323662" }}
                >
                  Unbind
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div className="row mb-2">
          <Card minWidth="26rem" minHeight="97px">
            <div class="d-flex">
              <BiTransfer
                style={{
                  color: "#000",
                  margin: "0.5rem",
                  width: "20px",
                  height: "20px",
                  background: "#01A9F4",
                  borderRadius: "50%",
                }}
              />
              <span>Transfer</span>
            </div>
            <div class="row d-flex align-items-center">
              <div class="col">
                <span className="text-muted">Current Email</span>
                <h6>anthony2142@emaill.com</h6>
              </div>
              <div className="col">
                <button
                  className="transfer-btn"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Transfer to >
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div className="row mb-2">
          <Card minWidth="26rem" minHeight="172px">
            <div class="row d-flex align-items-center">
              <div class="col-auto">
                <GoDesktopDownload
                  style={{
                    color: "#000",
                    margin: "0.5rem",
                    background: "#fff",
                    width: "64",
                    height: "64",
                    color: "#fff",
                    background: "transparent",
                  }}
                />
                <h6>Desktop App</h6>
              </div>
              <div class="col-8">
                <button
                  className="download-btn"
                  style={{ color: "#fff", background: "#1EC1C3" }}
                >
                  <FaApple
                    style={{
                      opacity: "0.2",
                      color: "#000",
                      fontSize: "1.5rem",
                    }}
                  />
                  <span>Download for MacOS</span>
                </button>
                <button
                  className="download-btn"
                  style={{
                    color: "#fff",
                    background: "#1EC1C3",
                  }}
                >
                  <FaWindows
                    style={{
                      opacity: "0.2",
                      color: "#000",
                      fontSize: "1.5rem",
                    }}
                  />
                  <span>Download for Windows</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <TransfairModel show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default RightCards;
