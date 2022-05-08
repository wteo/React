import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filteredYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter 
                select={filteredYear} 
                onFilteredYear={filteredYearHandler}
            />
            {filteredExpenses.map(expense => {
                return (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
                );
                })
            }
        </Card>
    );

}

export default Expenses;