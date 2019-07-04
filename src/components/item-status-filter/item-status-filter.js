import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './item-status-filter.css';

class ItemStatusFilter extends Component {
	render() {
		return (
			<div>
				<Button size="small" color="primary">
					All
				</Button>
				<Button size="small">Active</Button>
				<Button size="small">Done</Button>
			</div>
		);
	}
}

export default ItemStatusFilter;
