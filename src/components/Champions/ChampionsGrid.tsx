import { motion } from 'framer-motion';
import { ChampionsGridPropsType } from '../../types';
import { Champion } from './Champion';
import style from './ChampionsGrid.module.scss';

export const ChampionsGrid = ({
	filteredChampions,
}: ChampionsGridPropsType) => {
	return (
		<div className={style['champions-grid']}>
			{filteredChampions.map((champion) => (
				<Champion key={champion.id} championInfo={champion} />
			))}
		</div>
	);
};
