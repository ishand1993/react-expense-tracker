import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../css/NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 10).toFixed(2).toString(),
    };
    props.onAddExpense(ExpenseData);
    console.log(ExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
