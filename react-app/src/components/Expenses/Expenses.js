import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.items
        .filter(expense => expense.date.getFullYear().toString() === filterYear);

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onYearChange={filterChangeHandler}></ExpenseFilter>
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}*/}
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;