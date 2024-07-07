import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React from "react";

const App = () => {
  const expense = [
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

  return React.createElement('div', {}, React.createElement('h2', {}, "Let's Get Started!"), React.createElement(Expenses, {items: expense}));
  // return (
  //   <>
  //     <h2>Let's Get Started!</h2>
  //     <Expenses items={expense}/>
  //   </>
  // );
}

export default App;
