import React from 'react';
import SliderComponent from './common/SliderComponent';

const SliderSelect = ({ data, setData }) => {
	const bankLimit = 10000;

	return (
		<>
			<SliderComponent
				min={1000}
				max={bankLimit}
				defaultValue={data.homeValue}
				value={data.homeValue}
				step={100}
				label="Home Value"
				unit="€"
				amount={data.homeValue}
				//onChange={(event) => console.log(event.target.value)}
				//onChange={(event, value) => console.log(value)}
				onChange={(event, value) =>
					setData({
						...data, //spread operator??
						downPayment: value * 0.2,
						loanAmount: value * 0.8,
						homeValue: value,
					})
				}
			/>
			<SliderComponent
				min={0}
				max={data.homeValue}
				defaultValue={data.downPayment}
				value={data.downPayment}
				step={100}
				label={'Down Payment'}
				unit="€"
				amount={data.downPayment}
				onChange={(event, value) =>
					setData({
						...data,
						loanAmount: (data.homeValue - value),
						downPayment: value,
					})
				}
			/>
			<SliderComponent
				min={0}
				max={data.homeValue}
				defaultValue={data.loanAmount}
				value={data.loanAmount}
				step={100}
				label={'Loan Amount'}
				unit="€"
				amount={data.loanAmount}
				onChange={(event, value) =>
					setData({
						...data,
						downPayment: (data.homeValue - value),
						loanAmount: value,
					})
				}
			/>

			<SliderComponent
				min={2}
				max={18}
				defaultValue={data.interestRate}
				value={data.interestRate}
				step={0.5}
				label={'Interest Rate'}
				unit="%"
				amount={data.interestRate}
				onChange={(event, value) =>
					setData({
						...data,
						interestRate: value,
					})
				}
			/>
		</>
	);
};

export default SliderSelect;
