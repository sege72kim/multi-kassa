import React from "react";
import "./styles.css";

const Calculator = () => {
  return (
    <section className="calculator_section">
      <div className="coins">
        <img src="/icons/coins.svg" alt="" />
      </div>
      <h1>Калькулятор доходности</h1>
      <div className="calculator_blocks">
        <div className="calculator">
          <div className="calculator_main"></div>
          <div className="calculator_info">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="calculator_aside"></div>
      </div>
    </section>
  );
};

export default Calculator;
