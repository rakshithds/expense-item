import React, { useState } from "react"
import './NewExpensesForm.css'

const NewExpensesForm = (props) => {

  const[enteredTitle, setTitel] = useState('');
  const[enteredAmount, setAmount] = useState('');
  const[enteredDate, setDate] = useState('');
  // const[userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setTitel(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // setUserInput((prevstate) => {
    //   return {...prevstate, enteredTitle: event.target.value}
    // });
  }

  const amountChangeHandler = (event) =>{
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
  }
  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveNewExpense(expenseData);
    setTitel('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2018-1-1" max="2024-9-7" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};

export default NewExpensesForm;
