import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {title: 'Car Insurance', amount: '100.25', date: new Date(2022, 5, 20)},
        {title: 'Rent', amount: '1000', date: new Date(2022, 10, 1)},
        {title: 'Broadband', amount: '50.75', date: new Date(2022, 7, 10)},
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}/>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}/>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}/>
        </div>
    );
}

export default App;
