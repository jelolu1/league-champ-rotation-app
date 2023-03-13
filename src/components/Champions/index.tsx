import { useEffect, useState } from 'react';
import config from '../../config.json';
import champions from '../../json/allChampions.json';
import { singleChampionType } from '../../types';
import { CircleLoading } from '../UI/CircleLoading';
import { ChampionsGrid } from './ChampionsGrid';
import style from './index.module.scss';

export const Champions = () => {
	const [rotationChampionsIds, setRotationChampionsIds] = useState<
		Array<number>
	>([]);
	const [filteredChampions, setFilteredChampions] = useState<
		Array<singleChampionType>
	>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const championsData: { [key: string]: any } = champions.data;

	async function makeRequest() {
		try {
			const response = await fetch(
				`https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${config.apiKey}`
			);
			const data = await response.json();

			setRotationChampionsIds(data.freeChampionIds);
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	}

	useEffect(() => {
		makeRequest();
	}, []);

	useEffect(() => {
		const filteredChampionsArr: Array<singleChampionType> = [];

		for (const key in championsData) {
			rotationChampionsIds.includes(Number(championsData[key].key)) &&
				filteredChampionsArr.push(championsData[key] as singleChampionType);
		}

		setFilteredChampions(filteredChampionsArr);
	}, [rotationChampionsIds]);

	return (
		<div className={style['container']}>
			{loading ? (
				<CircleLoading />
			) : !error ? (
				<ChampionsGrid filteredChampions={filteredChampions} />
			) : (
				<p className={style['info-message']}>
					Failed to Fetch
					<br />
					<br />
					Generate a new API Key
				</p>
			)}
		</div>
	);
};
