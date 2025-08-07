import React from "react";
import "./Todo.css";
import VectorIcon from "../../assets/image/Vector.png";
import AttachIcon from "../../assets/image/Icon_Attach.png";
import FlagIcon from "../../assets/image/Icon_Flag.png";
import ClockIcon from "../../assets/image/Icon_Clock.png";

const Todo = (props) => {
  return (
    <div className="Todo-Box">
      <div className="Upper-Box">
        <div className="header">
          <p>{props.header}</p>
          <img src={VectorIcon} alt="vector" />
        </div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="assign">
          <p>{props.assign}</p>
        </div>
      </div>
      <div className="footer">
        <div className="attach">
          <img src={AttachIcon} alt="attach" />
          <p>{props.attach}</p>
        </div>
        <div className="flag">
          <img src={FlagIcon} alt="flag" />
        </div>
        <div className="time">
          <img src={ClockIcon} alt="time" />
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;