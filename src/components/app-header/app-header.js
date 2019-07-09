import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import './app-header.css';

const AppHeader = () => {
	return (
		<div>
			<CssBaseline />
			<Typography variant="h2" component="h1" gutterBottom>
				Todo List
			</Typography>
		</div>
	);
};
export default AppHeader;
