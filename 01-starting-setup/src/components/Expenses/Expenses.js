import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from './ExpensesList';
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
            <ExpensesList items={filteredExpenses} />            
        </Card>
    );

}

export default Expenses;