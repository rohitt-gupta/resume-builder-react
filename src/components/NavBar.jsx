import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
	return (
		<AppBar
			position='static'
			style={{ backgroundColor: "#662E9B", flexGrow: 1 }}
		>
			<Toolbar>
				<Typography variant='h6' style={{ flexGrow: 1 }} className=''>
					Resume Builder
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
