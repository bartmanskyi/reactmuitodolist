import React from 'react';
import TodoListItem from '../todo-list-item';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
	const doneCount = todos.filter((el) => el.done).length;
	const todoCount = todos.length - doneCount;
	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<TodoListItem
				{...itemProps}
				key={id}
				onDeleted={() => onDeleted(id)}
				onToggleImportant={() => onToggleImportant(id)}
				onToggleDone={() => onToggleDone(id)}
			/>
		);
	});
	return (
		<List
			className="todo-list"
			subheader={
				<ListSubheader component="div">
					{todoCount} more to do, {doneCount} done
				</ListSubheader>
			}
		>
			{elements}
		</List>
	);
};
export default TodoList;
