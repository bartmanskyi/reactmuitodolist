import React, { Component } from 'react';
import ClassNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import StarIconBorder from '@material-ui/icons/StarBorder';
// import Typography from '@material-ui/core/Typography';

import './todo-list-item.css';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	listItemTextImportant: {
		fontWeight: 600,
		color: '#2196f3'
	},
	listItemTextNormal: {
		fontWeight: 400
	},
	listItemTextCompleted: {
		textDecoration: 'line-through'
	},
	listItemTextNotCompleted: {
		textDecoration: 'none'
	}
});
class TodoListItem extends Component {
	render() {
		const { classes, label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
		return (
			<ListItem button className="todo-list-item" onClick={onToggleDone}>
				<ListItemText
					disableTypography
					className={ClassNames(
						important ? classes.listItemTextImportant : classes.listItemTextNormal,
						done ? classes.listItemTextCompleted : classes.listItemTextNotCompleted
					)}
					primary={label}
				/>
				<ListItemSecondaryAction>
					<IconButton onClick={onToggleImportant}>
						<StarIconBorder />
					</IconButton>
					<IconButton onClick={onDeleted}>
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		);
	}
}

export default withStyles(styles)(TodoListItem);
