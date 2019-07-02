import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import StarIconBorder from '@material-ui/icons/StarBorder';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const listItemStyle = {
        color: important ? 'tomato' : 'black'
    }
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
		<ListItem role={undefined} dense button style={listItemStyle}>
			{/* <ListItemIcon>
				<StarIconBorder />
			</ListItemIcon> */}
			<ListItemText primary={label} />
			<ListItemSecondaryAction>
				<IconButton>
					<StarIconBorder />
				</IconButton>
				<IconButton>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};
export default TodoListItem;
