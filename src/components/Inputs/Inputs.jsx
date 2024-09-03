import React, { useState } from 'react';
import {
  calculateInvestmentResults,
  formatter,
} from '../../util/investment.js';
import ResultsTable from '../ResultsTable/ResultsTable.jsx';

function Inputs() {
  const [investment, setInvestment] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  });
  const [results, setResults] = useState([]);

  function handleChange(e) {
    setInvestment({
      ...investment,
      [e.target.name]: !NaN ? parseFloat(e.target.value) : 0,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const investmentResults = calculateInvestmentResults({
      initialInvestment: parseFloat(investment.initialInvestment),
      annualInvestment: parseFloat(investment.annualInvestment),
      expectedReturn: parseFloat(investment.expectedReturn),
      duration: parseFloat(investment.duration),
    });

    setResults(investmentResults);
    resetForm();
  }
  function resetForm() {
    setInvestment({
      initialInvestment: '',
      annualInvestment: '',
      expectedReturn: '',
      duration: '',
    });
  }

  return (
    <>
      <form id={'user-input'} onSubmit={handleSubmit}>
        <div className={'input-group'}>
          <div>
            <label htmlFor={'INITIAL-INVESTMENT'}>{'INITIAL INVESTMENT'}</label>
            <input
              type={'number'}
              name={'initialInvestment'}
              value={investment.initialInvestment}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor={'ANNUAL-INVESTMENT'}>{'ANNUAL INVESTMENT'}</label>
            <input
              type={'number'}
              name={'annualInvestment'}
              value={investment.annualInvestment}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={'input-group'}>
          <div>
            <label htmlFor={'EXPECTED-RETURN'}>{'EXPECTED RETURN'}</label>
            <input
              type={'number'}
              name={'expectedReturn'}
              value={investment.expectedReturn}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor={'DURATION'}>{'DURATION'}</label>
            <input
              type={'number'}
              name={'duration'}
              value={investment.duration}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type={'submit'}>{'CALCULATE'}</button>
      </form>
      <ResultsTable data={results} />
    </>
  );
}

export default Inputs;
