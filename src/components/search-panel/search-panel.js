import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import ItemStatusFilter from '../item-status-filter';
import './search-panel.css';

const styles = {
	root: {
		padding: '8px 8px',
		display: 'flex',
		alignItems: 'center',
		maxWidth: 480
	},
	input: {
		marginLeft: 8,
		flex: 1
	},
	iconButton: {
		padding: 10
	},
	divider: {
		width: 1,
		height: 28,
		margin: 4
	}
};

function CustomizedInputBase(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root} elevation={1}>
			<InputBase className={classes.input} placeholder="type to search" />
			<Divider className={classes.divider} />
			<ItemStatusFilter />
		</Paper>
	);
}

export default withStyles(styles)(CustomizedInputBase);
