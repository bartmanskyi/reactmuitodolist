import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';

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
			{/* <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton> */}
			<Divider className={classes.divider} />
			<Button size="small" color="primary">
				All
			</Button>
			<Button size="small">
				Active
			</Button>
			<Button size="small">
				Done
			</Button>

			
			{/* <ButtonGroup size="small" color="primary" aria-label="Small outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup> */}
			{/* <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
        <DirectionsIcon />
      </IconButton> */}
		</Paper>
	);
}

CustomizedInputBase.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
