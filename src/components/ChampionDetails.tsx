import { NavLink, useLocation } from 'react-router-dom';
import style from './ChampionDetails.module.scss';

export const ChampionDetails = () => {
	const location = useLocation();
	const championName = location.state.id;

	return (
		<div className={style['champion-container']}>
			<NavLink className={style['back-btn']} to="/">
				<svg height="48" viewBox="0 96 960 960">
					<path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
				</svg>
				CHAMPIONS LIST
			</NavLink>
			<h2 className={style['champion-name']}>{championName}</h2>

			<img
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`}
				alt={championName}
				className={style['champion-img']}
			/>
		</div>
	);
};
