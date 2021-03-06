import React from "react";

const stylingHeader = {
  fontSize: "1.25rem",
  fontWeight: "400",
};
export const EmailElement = (props) => {
  return (
    <div className="col-md-4 mb-3 mb-md-0">
      <div className="card py-4 h-100 w-100">
        <div className="card-body text-center">
          <h4 className=" text m-0" style={{ stylingHeader }}>
            E-mail:
          </h4>
          <hr className="my-3" />
          <div className="small-text">
            <span> {props.e_mail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostAddress = (props) => {
  return (
    <div className="col-md-4 mb-3 mb-md-0">
      <div className="card py-4 h-100 w-100">
        <div className="card-body text-center">
          <h4 className="text m-0" style={{ stylingHeader }}>
            Adres:
          </h4>
          <hr className="my-3" />
          <div className="small-text">{props.address}</div>
        </div>
      </div>
    </div>
  );
};
export const PhoneNumber = (props) => {
  return (
    <div className="col-md-4 mb-3 mb-md-0">
      <div className="card py-4 h-100 w-100">
        <div className="card-body text-center">
          <h4 className="text m-0" style={{ stylingHeader }}>
            Telefon:
          </h4>
          <hr className="my-3" />
          <div className="small-text">{props.phone}</div>
        </div>
      </div>
    </div>
  );
};
