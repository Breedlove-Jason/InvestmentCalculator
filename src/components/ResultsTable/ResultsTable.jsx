import React from 'react';

function ResultsTable({ data }) {
  console.log(data);
  return (
    <div>
      <table id={'result'}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.valueEndOfYear}</td>
              <td>{row.interest}</td>
              <td>{row.expectedReturn}</td>
              <td>{row.endingBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
