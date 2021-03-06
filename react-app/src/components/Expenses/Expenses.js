import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onYearChange={filterChangeHandler}></ExpenseFilter>
                {props.items.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </Card>
        </div>
    );
}

export default Expenses;