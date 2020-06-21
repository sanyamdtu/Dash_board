import React from "react";

function Userinfo() {
  return (
    <div className="card mb-3 col-lg-6" style={{ border: "none" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://image.flaticon.com/icons/svg/21/21104.svg"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">SHUBHAM PANDEY</h5>
            <p className="card-text">
              <ul style={{ listStyle: "none" }}>
                <li>
                  Roll no: <span className="text-primary">1209731103</span>
                </li>
                <li>
                  Department: <span className="text-primary">CSE A</span>
                </li>
                <li>
                  Batch: <span className="text-primary">2019-2023</span>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Userinfo;
