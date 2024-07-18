import React, { useState } from "react"
import './NewExpenses.css'
import NewExpensesForm from "./NewExpensesForm";

const NewExpenses = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenseData = (newExpenseData) =>{
      const expenseData = {
        ...newExpenseData,
        id: Math.random().toString()
      };
      props.onSaveExpenseData(expenseData)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <NewExpensesForm onSaveNewExpense={addNewExpenseData} onCancel={stopEditingHandler}/>}
    </div>
  )
};

export default NewExpenses;
