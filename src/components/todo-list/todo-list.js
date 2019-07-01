import React from 'react';
import TodoListItem from '../todo-list-item';
import List from '@material-ui/core/List';

import './todo-list.css';

const TodoList = (classes) => {
	const todos = [ 
		{ label: 'Drink Coffee', important: false }, 
		{ label: 'Build React App', important: true },
		{ label: 'Git Commit', important: false },
		{ label: 'Git Push', important: false },
	];
	return (
		<List className={classes.list}>
			{todos.map(({label, important}) => (

				<TodoListItem label={label} important={important} />
			))}
		</List>
	);
};
export default TodoList;
