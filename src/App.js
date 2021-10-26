import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		date: new Date(2021, 4, 2),
		amount: 94.39,
	},
	{
		id: 'e2',
		title: 'New TV',
		date: new Date(2021, 8, 18),
		amount: 799.69,
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		date: new Date(2020, 2, 28),
		amount: 245.69,
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		date: new Date(2021, 5, 12),
		amount: 450,
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => [expense, ...prevExpenses]);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
