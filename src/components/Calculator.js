import React, { useState, useEffect } from "react";
import "../style/style.css";
import Dollar from "../images/icon-dollar.svg";
import Dollar2 from "../images/icon-dollar2.svg";
import Person from "../images/icon-person.svg";
import CurrencyFormat from "react-currency-format";

function Calculator() {
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [radioChecked, setradioChecked] = useState("");
  let element = "";

  let totalSum = 0;
  let tipSum = 0;

  const billHandle = (e) => {
    setBill(e.target.value);
  };
  const peopleHandle = (e) => {
    //console.log(people);
    setPeople(e.target.value);
  };
  const customHandle = (e) => {
    setTip(e.target.value);
    setradioChecked(e.target.value);
    //console.log(tip);
  };
  const focusHandle = (e) => {
    e.target.parentNode.firstChild.checked = true;
    //setradioChecked(true);
  };
  const tipHandle = (event) => {
    setTip(event.target.getAttribute("value"));
    element = event.target;
    //setradioChecked(true);
    console.log("leem", element);
  };
  /*console.log("tip:", tip);
  console.log("bill:", bill);
  console.log("person:", people);
  console.log("tipaount:", tipAmount);
  console.log("tiptotal:", total);*/
  const selectedOp = (e) => {
    console.log(e.target.value);
    setradioChecked(e.target.value);
  };

  useEffect(() => {
    if (people === 0 || (people === "0" && bill !== 0 && tip !== 0)) {
      //console.log("if ág");
      setTipAmount("0.00");
      setTotal("0.00");
    } else if (people !== 0 && bill !== 0 && tip !== 0) {
      totalSum = bill / Number(people) + tipSum;
      tipSum = (bill * (tip / 100)) / Number(people);
      //console.log((Number(totalSum) + Number(tipSum)).toFixed(2));
      setTipAmount(String(tipSum.toFixed(2)));
      setTotal(String((Number(totalSum) + Number(tipSum)).toFixed(2)));
    } else {
      setTipAmount("0.00");
      setTotal("0.00");
    }
  }, [tip, bill, people]);

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setradioChecked("");
    setTipAmount("0.00");
    setTotal("0.00");
    //console.log("clicked");
  };

  return (
    <div className="container-box">
      <div className="col-1">
        <section>
          <label htmlFor="bill-input" className="dark-label">
            Bill
          </label>
          <div className="bill">
            <CurrencyFormat
              format="###.##"
              decimalSeparator="."
              fixedDecimalScale={true}
              min="0.00"
              step="0.01"
              type="currency"
              className="bill-input"
              id="bill-input"
              value={bill === 0 ? "" : bill}
              placeholder="0"
              onChange={billHandle}
            />
            <img src={Dollar} alt="dollar icon" className="icon" />
          </div>
        </section>
        <section className="tip-container">
          <label htmlFor="tip-input" className="dark-label">
            Select Tip %
          </label>
          <div className="tips">
            <div className="row">
              <div className="tipCard">
                <input
                  type="radio"
                  onFocus={tipHandle}
                  onChange={selectedOp}
                  checked={radioChecked === "5"}
                  value={5}
                  id="tip5"
                  name="tip-value"
                />
                <label htmlFor="tip5" className="col">
                  5%
                </label>
              </div>
              <div className="tipCard">
                <input
                  type="radio"
                  onFocus={tipHandle}
                  onChange={selectedOp}
                  checked={radioChecked === "10"}
                  //onClick={setradioChecked(true)}
                  //checked={radioChecked}
                  value={10}
                  id="tip10"
                  name="tip-value"
                />
                <label htmlFor="tip10" className="col">
                  10%
                </label>
              </div>
              <div className="tipCard">
                <input
                  type="radio"
                  onChange={selectedOp}
                  checked={radioChecked === "15"}
                  //onClick={setradioChecked(true)}
                  //checked={radioChecked}
                  onFocus={tipHandle}
                  value={15}
                  id="tip15"
                  name="tip-value"
                />
                <label htmlFor="tip15" className="col">
                  15%
                </label>
              </div>
            </div>
            <div className="row">
              <div className="tipCard">
                <input
                  type="radio"
                  //onClick={setradioChecked(true)}
                  //checked={radioChecked}
                  onChange={selectedOp}
                  checked={radioChecked === "25"}
                  onFocus={tipHandle}
                  value={25}
                  id="tip25"
                  name="tip-value"
                />
                <label htmlFor="tip25" className="col">
                  25%
                </label>
              </div>
              <div className="tipCard">
                <input
                  type="radio"
                  //checked={radioChecked}
                  onChange={selectedOp}
                  checked={radioChecked === "50"}
                  onFocus={tipHandle}
                  value={50}
                  id="tip50"
                  name="tip-value"
                />
                <label htmlFor="tip50" className="col">
                  50%
                </label>
              </div>
              <div className="tipCard">
                <input
                  type="radio"
                  onChange={selectedOp}
                  checked={
                    radioChecked === "12" ||
                    radioChecked === "13" ||
                    radioChecked === "14" ||
                    radioChecked === "16" ||
                    radioChecked === "17" ||
                    radioChecked === "18" ||
                    radioChecked === "19" ||
                    radioChecked === "30" ||
                    radioChecked === "40"
                  }
                  value={tip}
                  onFocus={tipHandle}
                  id="custom"
                  name="tip-value"
                />

                <input
                  className="col-input"
                  type="number"
                  placeholder="Custom"
                  min={1}
                  maxLength={2}
                  max={50}
                  htmlFor="custom"
                  value={tip === "0" || tip === 0 ? "" : console.log(tip)}
                  onFocus={focusHandle}
                  onChange={customHandle}
                />
                <p
                  className="error2"
                  style={{
                    display: Number(tip) > 50 ? "inline-block" : "none",
                  }}
                >
                  Max. 50
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="people-texts">
            <label htmlFor="people-input" className="dark-label">
              Number of People
            </label>
            <div
              className="error"
              style={{ display: people === "0" ? "inline-block" : "none" }}
            >
              Can't be zero
            </div>
          </div>
          <div className="people">
            <input
              type="number"
              className="people-input"
              id="people-input"
              placeholder="0"
              value={people === 0 ? "" : people}
              max={25}
              min={0}
              onKeyDown={(event) => {
                event.preventDefault();
              }}
              style={{
                border:
                  people !== "0" ? "2px solid transparent" : "2px solid red",
              }}
              onChange={peopleHandle}
            />
            <img src={Person} alt="person icon" className="icon" />
          </div>
        </section>
      </div>
      <div className="col-2">
        <section>
          <div className="row2">
            <div className="tip-label">
              Tip Amount <p className="small-text">/ person</p>{" "}
            </div>
            <div className="price">
              <img src={Dollar2} alt="dollar icon" className="big-dollar" />
              {tipAmount}
            </div>
          </div>
          <div className="row2">
            <div className="tip-label">
              Total <p className="small-text">/ person</p>
            </div>
            <div className="price">
              <img src={Dollar2} alt="dollar icon" className="big-dollar" />
              {total}
            </div>
          </div>
        </section>
        <button
          disabled={tip !== 0 || bill !== 0 || people !== 0 ? false : true}
          style={{
            background:
              tip !== 0 || bill !== 0 || people !== 0 ? "#26c0ab" : "#0d686d",
            cursor: tip !== 0 || bill !== 0 || people !== 0 ? "pointer" : "",
          }}
          className="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Calculator;
