import React from 'react';
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
	}
});

const TodoListItem = ({ classes, label, important = false }) => {
	return (
		<Typography component="div">
			<ListItem role={undefined} button className="todo-list-item">
				<ListItemText
					primary={label}
					classes={{ primary: important ? classes.listItemTextImportant : classes.listItemTextNormal }}
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
};

export default withStyles(styles)(TodoListItem);
