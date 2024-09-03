import React from 'react';
import InvestmentLogo from '../../assets/investment-calculator-logo.png';

function Header() {
  return (
    <header id="header">
      <img src={InvestmentLogo} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
