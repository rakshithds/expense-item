import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <Card className="expense-item_description">
        <h2>{props.title}</h2>
        <Card className="expense-item_price">${props.amount}</Card>
      </Card>
    </Card>
  );
}

export default ExpenseItem;
