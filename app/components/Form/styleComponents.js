import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 25vh;
	transform: translateY(-50vh);
	margin-left: 50%;
	transform: translateX(-50%);
	width: 50vw;
	height: 50vh;
	border-radius: 8px;
	box-shadow: 6px 7px 33px 3px rgba(66, 68, 90, 1);
	background-color: ${(props) => props.theme === 'light' ? '#fff' : '#666'};
`;

export const FormFlex = styled.form`

`;

export const HeaderStyle = styled.h1`
	margin-top: -30px;
	margin-bottom: 30px;
	color: #0070f3;
	font-weight: 700;
	text-align: center;
	letter-spacing: 1.5px;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width:100%;
	left:0;
`;

export const LabelStyle = styled.label`
	display: flex;
	margin-top: 0.3em;
	width: 40%;
	font-weight: bold;
	letter-spacing: 0.7px;
`;

export const InputStyle = styled.input`
	margin-top:0.3em;
	width:60%;
	height: 25px;
	font-weight: bold;
	line-height:1.5em;
	border-radius:5px;
	box-shadow: 0.5px 0.8px 0.8px 0.5px rgba(66, 68, 90, 1);
`;

export const Button = styled.button`
	margin-top: 40px;
	height: 2.8rem;
	width: 100%;
	font-size: 1.005rem;
	font-weight: bold;
	border-radius: 5px;
	background-color: #0070f3;
	cursor: pointer;
	&:hover {
		font-size:1.1rem;
		background-color: #037cfc;
		transition-delay:0.1s;
	}
`;