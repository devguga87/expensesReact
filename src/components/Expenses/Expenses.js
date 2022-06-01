import React, {useState} from 'react'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == filteredYear)

  let expensesContent = <h2>No expenses found.</h2>

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem 
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      />
    )
  )
  }

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

        {expensesContent}
    
      </Card>
    </div>
  )
}

export default Expenses