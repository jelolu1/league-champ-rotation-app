import { ChampionsGridPropsType } from '../types';
import { Champion } from './Champion';
import style from './ChampionsGrid.module.scss';

export const ChampionsGrid = ({
	filteredChampions,
}: ChampionsGridPropsType) => {
	return (
		<div className={style['champions-grid']}>
			{filteredChampions.map((champion) => {
				return <Champion key={champion.id} championInfo={champion} />;
			})}
		</div>
	);
};
