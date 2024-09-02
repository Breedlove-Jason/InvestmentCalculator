import React from 'react';
import InvestmentLogo from "/investment-calculator-logo.png"

function Header() {
    return (
        <section id="header">
            <img src={InvestmentLogo} alt="Investment Calculator Logo" />
            <h1>Investment Calculator</h1>
        </section>
    );
}

export default Header;
