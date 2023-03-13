import utilityStyle from '../../style/utility.module.scss';
import { InfoFieldPropsType } from '../../types';
import style from './InfoField.module.scss';

export const InfoField = ({ name, value }: InfoFieldPropsType) => {
	const squares = [];
	let valueStyle = {};

	if (name === 'Attack') valueStyle = { backgroundColor: '#499167' };
	if (name === 'Defense') valueStyle = { backgroundColor: '#ff8811' };
	if (name === 'Magic') valueStyle = { backgroundColor: '#8a4fff' };
	if (name === 'Difficulty')
		valueStyle = {
			backgroundColor:
				value < 4 ? '#33ca7f' : value < 7 ? '#FFF275' : '#e50d00',
		};

	for (let i = 0; i < value; i++)
		squares.push(
			<div key={i} className={style['square-amount']} style={valueStyle} />
		);

	return (
		<>
			<label className={utilityStyle['gradient-text']}>{name}</label>
			<div className={style['value-display']}>{squares}</div>
		</>
	);
};
