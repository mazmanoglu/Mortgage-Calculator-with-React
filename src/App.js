import { useState } from 'react';
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import { Container, Grid } from '@mui/material';

function App() {
	/*
let x = 10; // assingment a value in javascript
	x = 20; // re-assign a value in javascript
	in react we assing with hooks

	we need to things
	- name for constant
	- function
	15 is the initial value of a

	const [a, setA] = useState(15)

	setA(30) --> without any purpose, you cannot reassign like this.
	 */

	const [data, setData] = useState({
		homeValue: 3000,
		downPayment: 3000 * 0.2,
		loanAmount: 3000 * 0.8,
		loanTerm: 5,
		interestRate: 5,
	});

	return (
		<div className="App">
			<Navbar />
			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Grid container spacing={5} alignItems={'center'}>
					<Grid item xs={12} md={6}>
						<SliderSelect data={data} setData={setData} />
						<TenureSelect data={data} setData={setData} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Result data={data} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
