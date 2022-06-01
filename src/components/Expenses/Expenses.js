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

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

        {filteredExpenses.length === 0 && <h2>No expenses found.</h2>}

        {filteredExpenses.map(expense => (
          <ExpenseItem 
            key={expense.id} 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}/>
          )
        )}
    
      </Card>
    </div>
  )
}

export default Expenses