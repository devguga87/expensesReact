import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }

  let content = <button onClick={startEditingHandler}>Add new Expense</button>

  if(isEditing){
    content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={stopEditing}/>
  }

  return (
    <div className="new-expense">
      {content}
    </div>
  )
};

export default NewExpense;