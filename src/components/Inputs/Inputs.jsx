import React from "react";

function Inputs() {
  return (
    <form id={"user-input"}>
      <div className={"input-group"}>
        <div>
          <label htmlFor={"INITIAL-INVESTMENT"}>{"INITIAL INVESTMENT"}</label>
          <input type={"number"} name={"INITIAL-INVESTMENT"} />
        </div>
        <div>
          <label htmlFor={"ANNUAL-INVESTMENT"}>{"ANNUAL INVESTMENT"}</label>
          <input type={"number"} name={"ANNUAL-INVESTMENT"} />
        </div>
      </div>
      <div className={"input-group"}>
        <div>
          <label htmlFor={"EXPECTED-RETURN"}>{"EXPECTED RETURN"}</label>
          <input type={"number"} name={"EXPECTED-RETURN"} />
        </div>
        <div>
          <label htmlFor={"DURATION"}>{"DURATION"}</label>
          <input type={"number"} name={"DURATION"} />
        </div>
      </div>
    </form>
  );
}

export default Inputs;
