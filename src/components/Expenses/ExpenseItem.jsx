import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {

  // const[title, setTitle] = useState(props.title)
  
  // const clickHandler = ()=>{
  //   setTitle("Updated");
  //   console.log(title);
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <Card className="expense-item_description">
        <h2>${props.title}</h2>
        <Card className="expense-item_price">${props.amount}</Card>
      </Card>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
