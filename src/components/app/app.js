import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import AppFooter from '../app-footer';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = (theme) => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing(5),
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(480 + theme.spacing(3) * 2)]: {
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	list: {
		width: '100%',
		maxWidth: 480
	}
});

class App extends Component {
	maxId = 100;
	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Build React App'),
			this.createTodoItem('Git Commit'),
			this.createTodoItem('Git Push'),
			this.createTodoItem('Have a lunch')
		],
		term: '',
		filter: 'all'
	};

	createTodoItem(label) {
		return {
			label,
			done: false,
			important: false,
			id: this.maxId++
		};
	}

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
		const newItem = this.createTodoItem(text);
		this.setState(({ todoData }) => {
			const newArray = [ ...todoData, newItem ];
			return {
				todoData: newArray
			};
		});
	};

	toggleProperty(arr, id, propertyName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName] };
		return [ ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1) ];
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};

	onSearchChange = (term) => {
		this.setState({ term });
	};

	onFilterChange = (filter) => {
		this.setState({ filter });
	};

	search(items, term) {
		if (term.length === 0) return items;
		return items.filter((el) => {
			return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	}

	filter(items, filter) {
		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		}
	}

	render() {
		const { classes } = this.props;
		const { todoData, term, filter } = this.state;
		const visibleItems = this.filter(this.search(todoData, term), filter);
		return (
			<div className={classes.root}>
				<Container component="main" maxWidth="sm">
					<AppHeader />
					<SearchPanel
						onSearchChange={this.onSearchChange}
						filter={filter}
						onFilterChange={this.onFilterChange}
					/>
					<TodoList
						todos={visibleItems}
						onDeleted={this.deleteItem}
						onToggleImportant={this.onToggleImportant}
						onToggleDone={this.onToggleDone}
					/>
					<ItemAddForm onItemAdded={this.addItem} />
					<AppFooter />
				</Container>
			</div>
		);
	}
}

export default withRoot(withStyles(styles)(App));
