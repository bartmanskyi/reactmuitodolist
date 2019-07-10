import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
	return (
		<Typography variant="body1">
			{'Built with '}
			<Link color="inherit" href="https://reactjs.org/" target="_blank">
				React
			</Link>
			{' & '}
			<Link color="inherit" href="https://material-ui.com/" target="_blank">
				Material-UI
			</Link>
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '20vh'
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2)
	},
	footer: {
		padding: theme.spacing(2),
		marginTop: 'auto',
		backgroundColor: 'white'
	}
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<footer className={classes.footer}>
				<Container maxWidth="sm">
					<MadeWithLove />
					<Typography variant="body2" color="textSecondary">
						<Link color="inherit" href="https://github.com/bartmanskyi/reactmuitodolist" target="_blank">
							Github
						</Link>
					</Typography>
				</Container>
			</footer>
		</div>
	);
}
