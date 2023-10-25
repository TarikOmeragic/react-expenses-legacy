import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

// const NewExpense = () => {}
function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) { /** GET DATA FROM CHILD COMPONENT */
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        cancelAdding()
    }

    function startEditingHandler() {
        setIsEditing(true)
    }

    function cancelAdding() {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelAdding={cancelAdding} />}
        </div>
    );
}

export default NewExpense;