import React from "react";

function Skills() {
  return (
    <div className="container">
      <small class="text-muted">Dictionary</small>
      <div class="progress " style={{ height: "23px" }}>
        <div
          class="progress-bar bg-secondary"
          style={{
            width: "100% ",
            height: "21px",
          }}
          ria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          100%
        </div>
      </div>
      <small class="text-muted">List</small>
      <div class="progress " style={{ height: "23px" }}>
        <div
          class="progress-bar bg-secondary"
          style={{
            width: "13% ",
            height: "21px",
          }}
          ria-valuenow="13"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          13%
        </div>
      </div>
      <small class="text-muted">Python</small>
      <div class="progress " style={{ height: "23px" }}>
        <div
          class="progress-bar bg-secondary"
          style={{
            width: "66% ",
            height: "21px",
          }}
          ria-valuenow="66"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          66%
        </div>
      </div>
      <small class="text-muted">Variables</small>
      <div class="progress " style={{ height: "23px" }}>
        <div
          class="progress-bar bg-secondary"
          style={{
            width: "100% ",
            height: "21px",
          }}
          ria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          100%
        </div>
      </div>
    </div>
  );
}

export default Skills;
