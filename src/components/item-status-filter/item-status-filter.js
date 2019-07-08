import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './item-status-filter.css';

class ItemStatusFilter extends Component {
	buttons = [ { name: 'all', label: 'All' }, { name: 'active', label: 'Active' }, { name: 'done', label: 'Done' } ];

	render() {
		const { filter, onFilterChange } = this.props;
		const buttons = this.buttons.map(({ name, label }) => {
			const isActive = filter === name;
			const color = isActive ? 'primary' : 'default';
			return (
				<Button size="small" color={color} key={name} onClick={() => onFilterChange(name)}>
					{label}
				</Button>
			);
		});
		return <div>{buttons}</div>;
	}
}

export default ItemStatusFilter;
