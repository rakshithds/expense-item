import React from "react";
import './ExpenseDate.css';
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="expense-date">
      <Card className="expense-date_month">{month}</Card>
      <Card className="expense-date_year">{year}</Card>
      <Card className="expense-date_day">{day}</Card>
    </Card>
  );
};

export default ExpenseDate;
