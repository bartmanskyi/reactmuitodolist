import React, { Component } from 'react';
import ClassNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import StarIconBorder from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';

import './todo-list-item.css';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	listItemTextImportant: {
		fontWeight: 500,
		color: '#2196f3'
	},
	listItemTextNormal: {
		fontWeight: 300
	},
	listItemTextCompleted: {
		textDecoration: 'line-through'
	},
	listItemTextNotCompleted: {
		textDecoration: 'none'
	}
});
class TodoListItem extends Component {
	constructor() {
		super();
		this.onLableClick = () => {
			console.log(`Done: ${this.props.label}`);
		};
		this.state = {
			done: false
		};
	}

	render() {
		const { classes, label, important = false } = this.props;
		const { done } = this.state;
		return (
			<Typography component="div">
				<ListItem role={undefined} button className="todo-list-item">
					<ListItemText
						disableTypography
						className={ClassNames(
							important ? classes.listItemTextImportant : classes.listItemTextNormal,
							done ? classes.listItemTextCompleted : classes.listItemTextNotCompleted
						)}
						primary={label}
						onClick={this.onLableClick}
					/>
					<ListItemSecondaryAction>
						<IconButton>
							<StarIconBorder />
						</IconButton>
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			</Typography>
		);
	}
}

export default withStyles(styles)(TodoListItem);
