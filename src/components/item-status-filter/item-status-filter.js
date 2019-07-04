import React from 'react';
import Button from '@material-ui/core/Button';

import './item-status-filter.css';

function ItemStatusFilter() {
	return (
		<div>
			<Button size="small" color="primary">All</Button>
			<Button size="small">Active</Button>
			<Button size="small">Done</Button>
		</div>
	);
}

export default ItemStatusFilter;