import React from 'react';
import TodoListItem from '../todo-list-item';
import List from '@material-ui/core/List';

import './todo-list.css';

const TodoList = () => {
	const todos = [
		{ id: 0, label: 'Drink Coffee', important: false },
		{ id: 1, label: 'Build React App', important: true },
		{ id: 2, label: 'Git Commit', important: false },
		{ id: 3, label: 'Git Push', important: false }
	];
	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
		return <TodoListItem {...itemProps} key={id} />;
	});
	return <List>{elements}</List>;
};
export default TodoList;
