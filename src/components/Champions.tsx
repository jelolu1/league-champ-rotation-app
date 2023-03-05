import config from '../config.json';
import champions from '../json/allChampions.json';
import fetchResponseOk from '../json/responseok.json';
import { singleChampionType } from '../types';
import style from './Champions.module.scss';
import { ChampionsGrid } from './ChampionsGrid';

export const Champions = () => {
	async function makeRequest() {
		const response = await fetch(
			'https://jp1.api.riotgames.com/lol/platform/v3/champion-rotations',
			{
				headers: {
					Authorization: `Bearer ${config.apiKey}`,
				},
			}
		);
		const data = await response.json();
	}

	const freeChampionsIds = fetchResponseOk.freeChampionIds;
	const filteredChampions: Array<singleChampionType> = [];
	const championsData: { [key: string]: any } = champions.data;

	for (const key in championsData) {
		freeChampionsIds.includes(Number(championsData[key].key)) &&
			filteredChampions.push(championsData[key] as singleChampionType);
	}

	return (
		<div className={style['container']}>
			<ChampionsGrid filteredChampions={filteredChampions} />
			<button onClick={() => makeRequest()} className={style['refresh-button']}>
				Refresh
			</button>
		</div>
	);
};
