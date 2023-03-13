import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChampionPropsType } from '../../types';
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
		<motion.div
			key={championInfo.id}
			className={style['champion']}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
			<motion.img
				className={style['champion-img']}
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_0.jpg`}
				alt={championName}
				onClick={handleClick}
				whileHover={{ scale: [null, 0.9], opacity: 0.25 }}
				transition={{ duration: 0.3 }}
			/>

			<motion.div className={style['champion-title']} onClick={handleClick}>
				{championName}
			</motion.div>
		</motion.div>
	);
};
