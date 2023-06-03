import {
	Card,
	CardContent,
	Divider,
	Grid,
	Paper,
	TextField,
	Typography,
	withStyles,
	CardHeader,
	Button,
	Container,
	InputAdornment,
} from "@material-ui/core";
// import { BackHandSharp } from "@mui/icons-material";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DescriptionIcon from "@material-ui/icons/Description";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import BusinessIcon from "@material-ui/icons/Business";
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

function Experience({ classes, values, handleChange, nextStep, prevStep }) {
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
				<CardHeader title='Experience Details' />
			</Card>
			<CardContent>
				<div className={classes.margin}>
					<Paper elevation={3}>
						{/* <Row> */}
						<Typography align='left' variant='h6' className={classes.margin}>
							<CheckCircleIcon />
							Organization 1
						</Typography>
						{/* </Row> */}

						<Grid container spacing={2} alignItems='center' lg={12}>
							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='institute1'
									label='Institue/Organisation'
									style={{ width: "90%" }}
									required
									value={values.institute1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<BusinessIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>
							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='position1'
									label='Position'
									style={{ width: "90%" }}
									required
									value={values.position1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<EventSeatIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='duration1'
									label='Duration'
									style={{ width: "90%" }}
									required
									value={values.duration1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<TimelapseIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item md={12} sm={12} xs={12} lg={12}>
								<TextField
									margin='dense'
									label='Description'
									variant='outlined'
									style={{ width: "97%" }}
									name='experienceDescription1'
									required
									value={values.experienceDescription1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<DescriptionIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>
						</Grid>
					</Paper>
					<br />
					<Divider />

					{section && (
						<Paper elevation={3}>
							<Typography align='left' variant='h6' className={classes.margin}>
								<CheckCircleIcon />
								Organization 2
							</Typography>
							<Grid container spacing={2} alignItems='center' lg={12}>
								<Grid item md={4} sm={12} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='institute1'
										label='Institue/Organisation'
										style={{ width: "90%" }}
										required
										value={values.institute1}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<BusinessIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>
								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='position1'
										label='Position'
										style={{ width: "90%" }}
										required
										value={values.position1}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<EventSeatIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>

								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='duration1'
										label='Duration'
										style={{ width: "90%" }}
										required
										value={values.duration1}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<TimelapseIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>

								<Grid item md={12} sm={12} xs={12} lg={12}>
									<TextField
										margin='dense'
										label='Description'
										variant='outlined'
										style={{ width: "97%" }}
										name='experienceDescription1'
										required
										value={values.experienceDescription1}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<DescriptionIcon />
												</InputAdornment>
											),
										}}
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
							{section
								? "Remove Second Organization"
								: "Add Second Organization"}
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
			<p className='text-center text-muted'>Page 3</p>
		</Paper>
	);
}

const StyledComponent = withStyles(styles)(Experience);

export default StyledComponent;
