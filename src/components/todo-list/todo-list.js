import React from 'react';
import TodoListItem from '../todo-list-item';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import './todo-list.css';

const TodoList = () => {
	const todos = [
		{ id: 0, label: 'Drink Coffee', important: false },
		{ id: 1, label: 'Build React App', important: true },
		{ id: 2, label: 'Git Commit', important: false },
		{ id: 3, label: 'Git Push', important: false }
	];
	const {toDo, done} = {toDo: 1, done: 3};
	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
		return <TodoListItem {...itemProps} key={id} />;
	});
	return (
		<List
			className="todo-list"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					{toDo} more to do, {done} done
				</ListSubheader>
			}
		>
			{elements}
		</List>
	);
};
export default TodoList;
