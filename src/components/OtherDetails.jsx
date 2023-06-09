/* eslint-disable no-unused-vars */
import {
	Card,
	CardContent,
	Divider,
	Grid,
	Paper,
	Typography,
	CardHeader,
	Button,
	Container,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { CheckCircle, NavigateNext, NavigateBefore } from "@mui/icons-material";

import InputTags from "./InputTags";
import PropTypes from "prop-types";
// import "./OtherDetails.css";

function OtherDetails({ handleChange, prevStep }) {
	const back = (e) => {
		e.preventDefault();
		prevStep();
	};

	return (
		<Paper style={{ padding: 8 }}>
			<Card>
				<CardHeader title='Other Details' />
			</Card>
			<CardContent>
				<div style={{ margin: 14 }}>
					<Paper elevation={3}>
						<Typography align='left' variant='h6' style={{ margin: 14 }}>
							<CheckCircle />
							Skills
						</Typography>
						<Grid
							container
							spacing={2}
							alignItems='center'
							lg={12}
							style={{ margin: 14 }}
						>
							<InputTags />
						</Grid>
					</Paper>
					<br />
					<Divider />
				</div>
			</CardContent>
			<Container style={{ margin: 14 }}>
				<Row style={{ marginBottom: "20px" }}>
					<Col xs={2} />
					<Col xs={4}>
						<Button
							variant='contained'
							color='secondary'
							startIcon={<NavigateBefore />}
							onClick={back}
						>
							Back
						</Button>
					</Col>
					<Col xs={4}>
						<Button
							variant='contained'
							color='secondary'
							// onClick={next}
							disabled
							endIcon={<NavigateNext />}
						>
							Next
						</Button>
					</Col>
					<Col xs={2} />
				</Row>
				<p className='text-center text-muted'>Page 4 </p>
			</Container>
		</Paper>
	);
}
OtherDetails.propTypes = {
	values: PropTypes.objectOf(PropTypes.string),
	handleChange: PropTypes.func,
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default OtherDetails;
