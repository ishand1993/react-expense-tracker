import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../css/NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 10).toFixed(2).toString(),
    };
    props.onAddExpense(ExpenseData);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
