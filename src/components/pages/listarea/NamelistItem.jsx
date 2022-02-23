import React from "react";
import "./NamelistItemstyle.css";
import moment from "moment";

function NamelistItem(props) {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col col-sm-12 col-md-3 ">
          <img src={props.avatar} className="rounded-circle" />
        </div>
        <div className="col col-sm-12 col-md-9">
          <h3 className="colorText"> {props.name}</h3>
          <p>
            {props.city} | {props.email}
          </p>
          <small className="smalltext">
            {moment(props.dob).format("DD-MM-YYYY")}
          </small>
        </div>
      </div>
    </li>
  );
}

export default NamelistItem;
