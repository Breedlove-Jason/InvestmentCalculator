import React, { useState } from "react";
import {calculateInvestmentResults} from "../../util/investment.js";

function Inputs() {
  const [investment, setInvestment] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: ''
  })
  const [results, setResults] = useState([])

  function handleChange(e){
    setInvestment({
        ...investment,
        [e.target.name]: e.target.value
    })
  }
    function handleSubmit(e) {
        e.preventDefault()
        const investmentResults = calculateInvestmentResults({
            initialInvestment: investment.initialInvestment,
            annualInvestment: investment.annualInvestment,
            expectedReturn: investment.expectedReturn,
            duration: investment.duration
        })
      setResults(investmentResults)
    }
  {console.log(investment)}
  console.log(results)
  return (
    <form id={"user-input"} onSubmit={handleSubmit}>
      <div className={"input-group"}>
        <div>
          <label htmlFor={"INITIAL-INVESTMENT"}>{"INITIAL INVESTMENT"}</label>
          <input type={"number"} name={"initialInvestment"} value={investment.initialInvestment} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor={"ANNUAL-INVESTMENT"}>{"ANNUAL INVESTMENT"}</label>
          <input type={"number"} name={"annualInvestment"} value={investment.annualInvestment}  onChange={handleChange}/>
        </div>
      </div>
      <div className={"input-group"}>
        <div>
          <label htmlFor={"EXPECTED-RETURN"}>{"EXPECTED RETURN"}</label>
          <input type={"number"} name={"expectedReturn"} value={investment.expectedReturn} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor={"DURATION"}>{"DURATION"}</label>
          <input type={"number"} name={"duration"} value={investment.duration} onChange={handleChange}/>
        </div>
      </div>
       <button type={"submit"}>{"CALCULATE"}</button>
    </form>
  );
}

export default Inputs;
