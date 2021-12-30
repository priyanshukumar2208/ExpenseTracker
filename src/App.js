import React, { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New TV",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses Items={expenses}></Expenses>
    </div>
  );
}
//or when code without jsx then first import 'react' from './react'
//return React.createElement('div',{},
//React.createElement('h2',{},"Let's get started!"),
//React.createElement(Expenses,{items: expenses}));

export default App;
