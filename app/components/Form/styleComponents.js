import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 15vh;
	transform: translateY(-50vh);
	margin-left: 50%;
	transform: translateX(-50%);
	width: 55vw;
	height: 70vh;
	border-radius: 8px;
	box-shadow: 6px 7px 33px 3px rgba(66, 68, 90, 1);
	background-color: ${(props) => props.theme === 'light' ? '#fff' : '#666'};

	@media (max-width: 1206px) {
		width: 70vw;
	}

	@media (max-width: 862px) {
		width: 95vw;
	}
`;

export const FormFlex = styled.form`

`;

export const HeaderStyle = styled.h1`
	margin-top: -15px;
	margin-bottom: 40px;
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	letter-spacing: 2px;
	color: #0070f3;

	@media (max-width: 390px) {
		font-size: 2.3rem;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 10px;
	left:0;
	width:100%;
	height: 60px;
	font-size: 1.1rem;

	@media (max-width: 636px) {
		font-size: 1rem;
	}

	@media (max-width: 330px) {
		width:95%;
	}
`;

export const ErrorStyle = styled.div`
	position: absolute;
	margin-top: 40px;
	margin-left:37%;
	width: 40%;
	color: red;
	font-weight: bold;

	@media (max-width: 1206px) {
		font-size: 1rem;
	}

	@media (max-width: 640px) {
		margin-left: 33%;
		font-size: 0.9rem;
	}

	@media (max-width: 390px) {
		margin-left: 45%;
		width: 60%;
		font-size: 0.9rem;
		font-weight:bold;
	}

	@media (max-width: 260px) {
		margin-left: 40%;
		width: 80%;
	}

`;

export const LabelStyle = styled.label`
	display: flex;
	margin-top: 0.2em;
	width: 45%;
	font-weight: bold;
	letter-spacing: 0.7px;
	@media (max-width: 1206px) {
		letter-spacing: 0.4px;
	  }
`;

export const InputStyle = styled.input`
	margin-top: 0.5em;
	width: 55%;
	height: 25px;
	font-weight: bold;
	line-height:1.8em;
	border-radius:5px;
	box-shadow: 0.5px 0.8px 0.8px 0.5px rgba(66, 68, 90, 1);
`;

export const Button = styled.button`
	margin-top: 10px;
	margin-left:-10%;
	width: 120%;
	height: 2.8rem;
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

	@media (max-width: 572px) {
		margin-top: 20px;
	}

	@media (max-width: 390px) {
		margin-left:10%;
		margin-top:20px;
		width: 80%;
	}
`;