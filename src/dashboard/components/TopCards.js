import React from "react";
import Card from "./Card";

import check from "./check.png";
import group from "./Group.png";
import "./TopCards.css";
const TopCards = () => {
  return (
    <div id="top-cards" className="row justify-content-around">
      <Card className="" minWidth="188px" height="8rem">
        <h3>Filter by :</h3>
        <ul className="list-unstyled d-flex">
          <li className="m-2 b-1">
            <span>1D</span>
          </li>
          <li className="m-2 b-1" style={{ background: "#01A9F4" }}>
            <span>1M</span>
          </li>
          <li className="m-2 b-1">
            <span>1Y</span>
          </li>
        </ul>
      </Card>
      <Card className="top-card-with-icon" minWidth="18rem" height="8rem">
        <div className="row">
          <div className="col-10">
            <h3>Total Checkouts</h3>
            <span>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#63F4F7",
                }}
              >
                72
              </span>
              /82
            </span>
          </div>
          <div className="col-2">
            <span style={{ marginLeft: "-3rem" }}>
              <img src={check} alt="" className="blue" />
            </span>
          </div>
        </div>
      </Card>
      <Card className="top-card-with-icon" minWidth="18rem" height="8rem">
        <div className="row">
          <div className="col-10">
            <h3>Total Failure</h3>
            <span>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#FE7448",
                }}
              >
                10
              </span>
              /82
            </span>
          </div>
          <div className="col-2">
            <span style={{ marginLeft: "-3rem" }}>
              <img src={group} alt="" srcset="" className="red" />
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopCards;
