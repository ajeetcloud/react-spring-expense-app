import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const staticExpenses = [
    {id: 'e1', title: 'Car Insurance', amount: '100.25', date: new Date(2022, 5, 20)},
    {id: 'e2', title: 'Rent', amount: '1000', date: new Date(2022, 10, 1)},
    {id: 'e3', title: 'Broadband', amount: '50.75', date: new Date(2022, 7, 10)},
];

const App = () => {

    const [expenses, setExpenses] = useState(staticExpenses);

    const addExpenseHandler = (expense) => {
        console.log(expense)
        //setExpenses([expense, ...expenses]);
        // The better way, as it depends on previous state.
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
