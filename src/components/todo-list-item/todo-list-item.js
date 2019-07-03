import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import StarIconBorder from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';

import './todo-list-item.css';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	listItemTextBold: {
		fontWeight: 500
	},
	listItemTextNormal: {
		fontWeight: 300
	}
});

const TodoListItem = ({ classes, label, important = false }) => {
	const listItemStyle = {
		color: important ? 'tomato' : 'black'
	};

	return (
		// <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
		//     <Checkbox checked={this.state.checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
		//     <ListItemText primary={`Line item ${value + 1}`} />
		//     <ListItemSecondaryAction>
		//         <IconButton aria-label="Comments">
		//             <CommentIcon />
		//         </IconButton>
		//     </ListItemSecondaryAction>
		// </ListItem>
		<Typography component="div">
			<ListItem
				role={undefined}
				button
				style={listItemStyle}
				className="todo-list-item"
			>
				{/* <ListItemIcon>
				<StarIconBorder />
			</ListItemIcon> */}
				<ListItemText primary={label} classes={{ primary: important ? classes.listItemTextBold : classes.listItemTextNormal }}/>
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
