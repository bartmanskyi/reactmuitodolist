import React from 'react';
import PropTypes from 'prop-types';


import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './todo-list';

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = (theme) => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	list: {
		width: '100%',
		maxWidth: 360
	},
	dense: {
		marginTop: 16
	}
});

class Index extends React.Component {
	state = {
		checked: [ 0 ]
	};

	handleToggle = (value) => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [ ...checked ];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		this.setState({
			checked: newChecked
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppHeader />
				<SearchPanel />
				<TodoList />
			</div>
		);
	}
}

Index.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
