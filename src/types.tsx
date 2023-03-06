export type singleChampionType = {
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

export type ChampionPropsType = {
	championInfo: singleChampionType;
};

export type ChampionsGridPropsType = {
	filteredChampions: Array<singleChampionType>;
};

export type StatFieldPropsType = {
	name: string;
	value: number;
};

export type InfoFieldPropsType = {
	name: string;
	value: number;
};
