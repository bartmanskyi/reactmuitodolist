import React from 'react';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
	input: {
    height: 40,
    width: '100%'
	},
	button: {
    height: 40,
	}
});

const ItemAddForm = withStyles(styles)((props) => {
	const { classes } = props;

	return (
		<div>
			<Grid container direction="row">
				<Grid item xs={10}>
					<TextField
            variant="outlined"
            label="New task"
						InputProps={{
							className: classes.input
						}}
						InputLabelProps={{
							shrink: true
						}}
            fullWidth
					/>
				</Grid>

				<Grid item  xs={2}>
					<Button variant="outlined" color="primary" className={classes.button}>
						Add
					</Button>
				</Grid>
			</Grid>
		</div>
	);
});

export default ItemAddForm;
