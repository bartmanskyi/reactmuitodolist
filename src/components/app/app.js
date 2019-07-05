import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = (theme) => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing(20),
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(480 + theme.spacing(3) * 2)]: {
			maxWidth: 480,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	// container: {
	// 	display: 'flex',
	// 	flexWrap: 'wrap'
	// },
	list: {
		width: '100%',
		maxWidth: 480
	}
	// dense: {
	// 	marginTop: 16
	// }
});

class Index extends Component {
	maxId = 100;

	state = {
		checked: [ 0 ],
		todoData: [
			{ id: 0, label: 'Drink Coffee', important: false },
			{ id: 1, label: 'Build React App', important: true },
			{ id: 2, label: 'Git Commit', important: false },
			{ id: 3, label: 'Git Push', important: false }
		]
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newTodoData = [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1) ];
			return {
				todoData: newTodoData
			};
		});
	};

	addItem = (text) => {
		const newItem = {
			label: text,
			important: false,
			id: this.maxId++
		};
		this.setState(({ todoData }) => {
			const newArray = [ ...todoData, newItem ];
			return {
				todoData: newArray
			};
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppHeader />
				<SearchPanel />
				<TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
				<ItemAddForm onItemAdded={this.addItem} />
			</div>
		);
	}
}

export default withRoot(withStyles(styles)(Index));
