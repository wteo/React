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

    return (
        <Card className="expenses">
            <ExpensesFilter 
                select={filteredYear} 
                onFilteredYear={filteredYearHandler}/>
            {props.items.map(expense => {
                return (
                <ExpenseItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
                );
                })}
        </Card>
    );

}

export default Expenses;