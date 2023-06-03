import {
	Card,
	CardContent,
	Divider,
	Grid,
	Paper,
	Snackbar,
	TextField,
	Typography,
	withStyles,
	CardHeader,
	Button,
	Container,
} from "@material-ui/core";
// import { BackHandSharp } from "@mui/icons-material";
import React, { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
// import { CardHeader } from "reactstrap";

const styles = (theme) => ({
	margin: {
		margin: theme.spacing(1.3),
	},
	padding: {
		padding: theme.spacing(1),
	},
});

function Education({ classes, values, handleChange, nextStep, prevStep }) {
	const [section, setSection] = useState(false);

	const addSectionHandler = () => {
		setSection((prevCheck) => !prevCheck);
	};
	const next = (e) => {
		e.preventDefault();
		nextStep();
	};

	const back = (e) => {
		e.preventDefault();
		prevStep();
	};

	return (
		<Paper className={classes.padding}>
			<Card>
				<CardHeader title='Education Details' />
			</Card>
			<CardContent>
				<div className={classes.margin}>
					<Paper elevation={3}>
						<Typography align='left' variant='h6' className={classes.margin}>
							Education 1
						</Typography>
						<Grid container spacing={2} alignItems='center' lg={12}>
							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='college'
									label='College/Unviersity'
									style={{ width: "80%" }}
									required
									value={values.college}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='fromyear1'
									label='From Year'
									type='date'
									style={{ width: "80%" }}
									required
									value={values.fromyear1}
									onChange={handleChange}
								/>
							</Grid>

							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='toyear1'
									type='date'
									label='To Year'
									style={{ width: "80%" }}
									required
									value={values.toyear1}
									onChange={handleChange}
								/>
							</Grid>

							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin='dense'
									label='Qualification'
									variant='outlined'
									style={{ width: "80%" }}
									name='qualification1'
									required
									value={values.qualification1}
									onChange={handleChange}
								/>
							</Grid>

							<Grid item md={8} sm={12} xs={12} lg={8}>
								<TextField
									margin='dense'
									label='Description'
									variant='outlined'
									style={{ width: "90%" }}
									name='description1'
									required
									value={values.description1}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
					</Paper>
					<br />
					<Divider />

					{section && (
						<Paper elevation={3}>
							<Typography align='left' variant='h6' className={classes.margin}>
								Education 2
							</Typography>
							<Grid container spacing={2} alignItems='center' lg={12}>
								<Grid item md={4} sm={12} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='school'
										label='School'
										style={{ width: "80%" }}
										required
										value={values.school}
										onChange={handleChange}
									/>
								</Grid>
								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='fromyear2'
										label='From Year'
										type='date'
										style={{ width: "80%" }}
										required
										value={values.fromyear2}
										onChange={handleChange}
									/>
								</Grid>

								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='toyear2'
										label='To Year'
										type='date'
										style={{ width: "80%" }}
										required
										value={values.toyear2}
										onChange={handleChange}
									/>
								</Grid>

								<Grid item md={4} sm={12} xs={12} lg={4}>
									<TextField
										margin='dense'
										label='Qualification'
										variant='outlined'
										style={{ width: "80%" }}
										name='qualification2'
										required
										value={values.qualification2}
										onChange={handleChange}
									/>
								</Grid>

								<Grid item md={8} sm={8} xs={8} lg={8}>
									<TextField
										margin='dense'
										label='Description'
										variant='outlined'
										style={{ width: "90%" }}
										name='description2'
										required
										value={values.description2}
										onChange={handleChange}
									/>
								</Grid>
							</Grid>
						</Paper>
					)}
				</div>
			</CardContent>
			<Container className={classes.margin}>
				{/* {!section && ( */}
				<Row>
					<Col>
						<Button
							variant='contained'
							style={{ marginBottom: "20px" }}
							color='primary'
							onClick={addSectionHandler}
						>
							{" "}
							{section ? "Remove Second Education" : "Add Second Education"}
						</Button>
					</Col>
				</Row>

				<Row style={{ marginBottom: "20px" }}>
					<Col xs={4} />
					<Col xs={2}>
						<Button
							variant='contained'
							color='secondary'
							onClick={back}
							startIcon={<NavigateBeforeIcon />}
						>
							Back
						</Button>
					</Col>
					<Col xs={2}>
						<Button
							variant='contained'
							color='secondary'
							onClick={next}
							endIcon={<NavigateNextIcon />}
						>
							Next
						</Button>
					</Col>
					<Col xs={4} />
				</Row>
			</Container>
			<p className='text-center text-muted'>Page 2</p>

			{/* <Snackbar
				open={this.state.open}
				autoHideDuration={6000}
				onClose={this.handleClose}
				action={this.action}
			>
				<Alert
					onClose={this.handleClose}
					severity='success'
					sx={{ width: "100%" }}
				>
					Your data has been saved successfully !
				</Alert>
			</Snackbar> */}
		</Paper>
	);
}

// export default withStyles(styles)(Education);

const StyledComponent = withStyles(styles)(Education);

export default StyledComponent;
