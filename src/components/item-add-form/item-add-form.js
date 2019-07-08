import React, { Component } from 'react';

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
		height: 40
	}
});

//const ItemAddForm = withStyles(styles)((props) => {
class ItemAddForm extends Component {
	state = {
		label: ''
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.label.length > 0) this.props.onItemAdded(this.state.label);
		this.setState({
			label: ''
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<form onSubmit={this.onSubmit}>
				<Grid container direction="row" spacing={1}>
					<Grid item xs={9} sm={10}>
						<TextField
							variant="outlined"
							label="What needs to be done"
							InputProps={{
								className: classes.input
							}}
							InputLabelProps={{
								shrink: true
							}}
							fullWidth
							onChange={this.onLabelChange}
							value={this.state.label}
						/>
					</Grid>

					<Grid item xs={3} sm={2} align="right">
						<Button variant="outlined" color="primary" className={classes.button} onClick={this.onSubmit}>
							Add
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

export default withStyles(styles)(ItemAddForm);
