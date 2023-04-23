import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

/*
const SliderComponent = (props) => {
	return (
		<Slider
			defaultValue={props.defaultValue}
			min={props.min}
			max={props.max}
			aria-label="Default"
			valueLabelDisplay="auto"
		/>
	);
};
*/

// props destructuring
const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
	return (
		<Stack my={1.4}>
			{/* this is fake dom. Instead of this, can use React.Fragment*/}
			{/*<React.Fragment></React.Fragment>*/}
			<Stack gap={1} direction={'column'}>
				{' '}
				{/*default directieon value = column*/}
				<Typography variant="subtitle2">{label}</Typography>
				<Typography variant="h5">{unit} {amount}</Typography>
			</Stack>

			<Slider
				defaultValue={defaultValue}
				min={min}
				max={max}
				aria-label="Default"
				valueLabelDisplay="auto"
				marks
				step={step}
				onChange={onChange}
				value={value}
			/>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Typography variant='caption' color="text.secondary">{unit} {min}</Typography>
				<Typography color="text.secondary">{unit} {max}</Typography>
			</Stack>
		</Stack>
	);
};

export default SliderComponent;
