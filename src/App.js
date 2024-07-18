import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSE = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 290.88,
    date: new Date(2022, 5, 7),
  },
  {
    id: 2,
    title: "Bike Insurance",
    amount: 150.81,
    date: new Date(2022, 8, 7),
  },
  {
    id: 3,
    title: "Bus Insurance",
    amount: 500.81,
    date: new Date(2022, 8, 9),
  },
  {
    id: 4,
    title: "Flight Insurance",
    amount: 700.81,
    date: new Date(2022, 11, 9),
  },
];

const App = () => {
  
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addNewExpense = expense => {
    setExpense((prevExpenses) =>{
    return [expense, ...prevExpenses]
    });
  };

  return React.createElement(
    "div",
    {},
    React.createElement(NewExpenses, { onSaveExpenseData: addNewExpense }),
    React.createElement(Expenses, { items: expenses})
  );
  // return (
  //   <>
  //     <h2>Let's Get Started!</h2>
  //     <Expenses items={expense}/>
  //   </>
  // );
};

export default App;
