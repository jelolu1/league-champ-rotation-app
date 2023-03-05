import { EffectCallback, useEffect, useState } from 'react';
import './App.css';

import config from './config.json';
import champions from './json/allChampions.json';
import fetchResponseOk from './json/responseok.json';

type singleChampionType = {
	version: string;
	id: string;
	key: string;
	name: string;
	title: string;
	blurb: string;
	info: { attack: number; defense: number; magic: number; difficulty: number };
	image: {
		full: string;
		sprite: string;
		group: string;
		x: number;
		y: number;
		w: 48;
		h: 48;
	};
	tags: string[];
	partype: string;
	stats: {
		hp: number;
		hpperlevel: number;
		mp: number;
		mpperlevel: number;
		movespeed: number;
		armor: number;
		armorperlevel: number;
		spellblock: number;
		spellblockperlevel: number;
		attackrange: number;
		hpregen: number;
		hpregenperlevel: number;
		mpregen: number;
		mpregenperlevel: number;
		crit: number;
		critperlevel: number;
		attackdamage: number;
		attackdamageperlevel: number;
		attackspeedperlevel: number;
		attackspeed: number;
	};
};

function App() {
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
		console.log(data);
	}

	const freeChampionsIds = fetchResponseOk.freeChampionIds;
	const filteredChampions: Array<singleChampionType> = [];
	const championsData: { [key: string]: any } = champions.data;

	for (const key in championsData) {
		freeChampionsIds.includes(Number(championsData[key].key)) &&
			filteredChampions.push(championsData[key] as singleChampionType);
	}

	return (
		<div className="container">
			<div className="champions-grid">
				{filteredChampions.map((champion) => {
					const championName = champion.id
						.split('')
						.map((c, i) => (i === 0 ? c : c === c.toUpperCase() ? ' ' + c : c))
						.join('');

					return (
						<div key={champion.id} className="champion">
							<img
								className="champion-img"
								src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
								alt={championName}
							/>
							<h2 className="champion-title">{championName}</h2>
						</div>
					);
				})}
			</div>
			<div>
				<button className="request-button">Refresh</button>
			</div>
		</div>
	);
}

export default App;
