import React from "react";

export const ContactCard = ({ email, address, phone, fullName }) => (
  <div className="container">
    <div className="row">
      <div className="col-2">
        <img
          src={
            "https://raw.githubusercontent.com/breatheco-de/exercise-contact-list-context/master/src/img/m101.jpg"
          }
          alt={fullName}
          className="rounded-circle mx-auto d-block img-fluid"
        />
      </div>
      <div className="col-2">
        <br />
        <i className="fas fa-map-marker-alt text-muted mr-3" />
        <span className="text-muted">
          <span>{address}</span>
        </span>
        <br />
        <i className="fa fa-phone fa-fw text-muted mr-3" />
        <span className="text-muted">{phone}</span>
        <br />
        <i className="fa fa-envelope fa-fw text-muted mr-3" />
        <span className="text-muted">{email}</span>
      </div>
      <div className="col-8">
        <div className=" float-right">
          <button className="btn">
            <i className="fas fa-pencil-alt mr-3" />
          </button>
          <button className="btn">
            {" "}
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
    </div>
  </div>
);
