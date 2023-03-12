import { NavLink, useNavigate } from 'react-router-dom';
import { ChampionPropsType } from '../types';
import style from './Champion.module.scss';

export const Champion = ({ championInfo }: ChampionPropsType) => {
	const navigate = useNavigate();

	const championName = championInfo.name
		.split('')
		.map((c, i) => (i === 0 ? c : c === c.toUpperCase() ? ' ' + c : c))
		.join('');

	const handleClick = () => {
		navigate(championInfo.id.toLowerCase(), { state: championInfo });
	};

	return (
		<div key={championInfo.id} className={style['champion']}>
			<img
				className={style['champion-img']}
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_0.jpg`}
				alt={championName}
				onClick={handleClick}
			/>

			<h2 className={style['champion-title']} onClick={handleClick}>
				{championName}
			</h2>
		</div>
	);
};
