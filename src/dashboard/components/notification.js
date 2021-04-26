import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

import "./notification.css";
const Notification = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      mountOnEnter
      unmountOnExit
      classNames="slide-in-left"
    >
      <div className="card notification-card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">
            <FaCheckCircle
              style={{
                fontSize: "1.5rem",
                color: "#1EC1C3",
                marginRight: "0.5rem",
              }}
            />
            <span className="font-weight-bold">Transfer link confirmed</span>
            <span className="text-muted"> by jamesconor@email.com</span>
          </li>
          <li className="list-group-item">
            <FaCheckCircle
              style={{
                fontSize: "1.5rem",
                color: "#1EC1C3",
                marginRight: "0.5rem",
              }}
            />
            <span className="font-weight-bold">Transfer link confirmed</span>
            <span className="text-muted"> anthony2142@email.com</span>
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};

export default Notification;
