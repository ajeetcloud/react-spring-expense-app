import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {title: 'Car Insurance', amount: '100.25', date: new Date(2022, 5, 20)},
        {title: 'Rent', amount: '1000', date: new Date(2022, 10, 1)},
        {title: 'Broadband', amount: '50.75', date: new Date(2022, 7, 10)},
    ];

    const addExpenseHandler = (newForm) => {
        console.log(newForm)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
