// import { Card as Mcard, CardContent, Typography } from "@mui/material";
import React from "react";
// import brain from "../images/card-icon.png";
import "./Cards.css";
const Card = (props) => {
  // {componentData}  this.props
  var iter = props.componentData.ValID[1];
  if (iter % 2 === 0) {
    return (
      // <div>
      //   <div className="card">
      //     <div className="card-body cb2">
      //       <p className="card-text">
      //         With supporting text below as a natural lead-in to additional
      //         content.
      //       </p>
      //       <img className="icons" src={props.componentData.icon} alt="error" />
      //     </div>
      //     <p
      //       className="card-bottom"
      //       style={{ backgroundColor: props.componentData.bgColorr }}
      //     ></p>
      //     <span
      //       className="bottomhead"
      //       style={{ color: props.componentData.bgColorr }}
      //     >
      //       {props.componentData.ValID}
      //     </span>
      //   </div>
      // </div>
      <div className="card">
        <div className="cb2">
          <p className="card-text">{props.componentData.desc}</p>
          <img className="icons" src={props.componentData.icon} alt="error" />
        </div>
        <p
          className="card-bottom"
          style={{ backgroundColor: props.componentData.bgColorr }}
        ></p>
        <span
          className="bottomhead"
          style={{ color: props.componentData.bgColorr }}
        >
          {props.componentData.ValID}
        </span>
      </div>
    );
  }
  return (
    <div>
      <div className="card">
        <p
          className="card-header"
          style={{ backgroundColor: props.componentData.bgColorr }}
        ></p>
        <span
          className="topHeading"
          style={{ color: props.componentData.bgColorr }}
        >
          {props.componentData.ValID}
        </span>
        <div className="card-body">
          <img className="icons" src={props.componentData.icon} alt="error" />
          <p className="card-text">{props.componentData.desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
