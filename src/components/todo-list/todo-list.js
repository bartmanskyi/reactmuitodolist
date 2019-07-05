import React from 'react';
import TodoListItem from '../todo-list-item';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import './todo-list.css';

const TodoList = ({todos, onDeleted}) => {

	const {toDo, done} = {toDo: 1, done: 3};
	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
		return <TodoListItem {...itemProps} key={id} onDeleted={() => onDeleted(id)} />;
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
