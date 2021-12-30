import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //or
  //const [userInput, setUserInput] = useState({
  //enteredTitle: "",
  //enteredAmount: "",
  //enteredDate: "",
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //or

    //setUserInput({
    // ...userInput,
    //enteredTitle: event.target.value,
    //});
    //or

    //setUserInput((prevState) => {
    //  return { ...prevState, enteredTitle: event.target.value};
    //});
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
    //...userInput,
    //enteredAmount: event.target.value,
    //});
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
    //...userInput,
    //enteredDate: event.target.value,
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault(); //it prevents it from sending req to server

    //it is an obj not a fun
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //passing data to parent component
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
