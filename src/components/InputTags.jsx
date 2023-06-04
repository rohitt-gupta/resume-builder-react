import { Cancel } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
// import { Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const Tags = ({ data, handleDelete }) => {
	return (
		<Box
			sx={{
				background: "#afb2b6",
				height: "100%",
				display: "flex",
				padding: "0.4rem",
				margin: "0 0.5rem 0 0",
				justifyContent: "center",
				alignContent: "center",
				color: "#f1efef",
				borderRadius: "30%",
			}}
		>
			<Stack direction='row' gap={1}>
				<Typography>{data}</Typography>
				<Cancel
					sx={{ cursor: "pointer" }}
					onClick={() => {
						handleDelete(data);
					}}
				/>
			</Stack>
		</Box>
	);
};
Tags.propTypes = {
	data: PropTypes.objectOf(PropTypes.string),
	handleDelete: PropTypes.func,
};

export default function InputTags() {
	const [tags, SetTags] = useState([]);
	const tagRef = useRef();
	const handleDelete = (value) => {
		const newtags = tags.filter((val) => val !== value);
		SetTags(newtags);
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		SetTags([...tags, tagRef.current.value]);
		tagRef.current.value = "";
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<form onSubmit={handleOnSubmit}>
				<TextField
					inputRef={tagRef}
					fullWidth
					variant='standard'
					size='small'
					sx={{ margin: "1rem 0" }}
					margin='none'
					placeholder={tags.length < 5 ? "Enter tags" : ""}
					InputProps={{
						startAdornment: (
							<Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
								{tags.map((data, index) => {
									return (
										<Tags data={data} handleDelete={handleDelete} key={index} />
									);
								})}
							</Box>
						),
					}}
				/>
			</form>
		</Box>
	);
}
