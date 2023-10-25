import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023')
    let filterInfoText = '2022, 2021 & 2020'

    if (filteredYear === '2022') {
        filterInfoText = '2023, 2021 & 2020'
    } else if (filteredYear === '2021') {
        filterInfoText = '2023, 2022 & 2020'
    } else if (filteredYear === '2020') {
        filterInfoText = '2023, 2022 & 2021'
    }

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            {/* <p>Data for years {filterInfoText} is hidden.</p> */}
            {/* <ExpenseItem 
                expense={expenses[0]} /> */}
            {/* <ExpenseItem 
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date} /> */}
            
            {/* CONDITIONAL AND DYNAMIC */}
            {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
            {filteredExpenses.length > 0 && 
                filteredExpenses.map((expense, index) => 
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                )
            } */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}
export default Expenses;