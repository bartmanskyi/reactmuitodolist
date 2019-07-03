import React from 'react';
import Typography from '@material-ui/core/Typography';
import './app-header.css';

const AppHeader = () => {
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Todo List
			</Typography>
			<Typography variant="subtitle2" gutterBottom>
				1 more to do, 3 done
			</Typography>
		</div>
	);
};
export default AppHeader;
