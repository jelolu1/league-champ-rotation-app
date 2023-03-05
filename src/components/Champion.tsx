import { ChampionPropsType } from '../types';
import style from './Champion.module.scss';

export const Champion = ({ championInfo }: ChampionPropsType) => {
	const championName = championInfo.id
		.split('')
		.map((c, i) => (i === 0 ? c : c === c.toUpperCase() ? ' ' + c : c))
		.join('');

	return (
		<div key={championInfo.id} className={style['champion']}>
			<img
				className={style['champion-img']}
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_0.jpg`}
				alt={championName}
			/>
			<h2 className={style['champion-title']}>{championName}</h2>
		</div>
	);
};
