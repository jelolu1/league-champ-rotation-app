import { NavLink, useLocation } from 'react-router-dom';
import style from './ChampionDetails.module.scss';

export const ChampionDetails = () => {
	const location = useLocation();
	const championId = location.state.id;
	const championName = location.state.name;
	const championTitle = location.state.title;
	const championBlurb = location.state.blurb;
	const championInfo = location.state.info;
	const championStats = location.state.stats;

	return (
		<div>
			<NavLink className={style['back-btn']} to="/">
				<svg height="48" viewBox="0 96 960 960">
					<path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
				</svg>
				CHAMPIONS LIST
			</NavLink>
			<div className={style['champion-container']}>
				<img
					src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`}
					alt={championName}
					className={style['champion-img']}
				/>

				<div className={style['champion-data']}>
					<h2 className={style['champion-name']}>{championName}</h2>
					<h3
						className={`${style['gradient-text']} ${style['champion-label']}`}
					>
						{championTitle.toUpperCase()}
					</h3>
					<p className={style['champion-blurb']}> {championBlurb}</p>
					<h3 className={style['champion-label']}>INFO</h3>
					<div className={style['champion-info']}>
						<div>
							<label className={style['gradient-text']}>Attack</label> -{' '}
							{championInfo.attack}
						</div>
						<div>
							<label className={style['gradient-text']}>Defense</label> -{' '}
							{championInfo.defense}
						</div>
						<div>
							<label className={style['gradient-text']}>Magic</label> -{' '}
							{championInfo.magic}
						</div>
						<div>
							<label className={style['gradient-text']}>Difficulty</label> -{' '}
							{championInfo.difficulty}
						</div>
					</div>
					<h3 className={style['champion-label']}>STATS</h3>
					<div className={style['stats-grid']}>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>HP</label>
							<p>{championStats.hp}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>HP per Lvl.</label>
							<p>{championStats.hpperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>MP</label>
							<p>{championStats.mp}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>MP per Lvl.</label>
							<p>{championStats.mpperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>Armor</label>
							<p>{championStats.armor}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>Armor per Lvl.</label>
							<p>{championStats.armorperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>Spell Block</label>
							<p>{championStats.spellblock}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>
								Spell Block per Lvl.
							</label>
							<p>{championStats.spellblockperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>HP Regen</label>
							<p>{championStats.hpregen}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>
								HP Regen per Lvl.
							</label>
							<p>{championStats.hpregenperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>MP Regen</label>
							<p>{championStats.mpregen}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>
								MP Regen per Lvl.
							</label>
							<p>{championStats.mpregenperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>Critic</label>
							<p>{championStats.crit}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>Critic per Lvl.</label>
							<p>{championStats.critperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>Attack Dmg.</label>
							<p>{championStats.attackdamage}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>
								Attack Dmg. per Lvl.
							</label>
							<p>{championStats.attackdamageperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>Attack Speed</label>
							<p>{championStats.attackspeed}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>
								Attack Speed per Lvl.
							</label>
							<p>{championStats.attackspeedperlevel}</p>
						</div>

						<div className={style['stat']}>
							<label className={style['gradient-text']}>Move Speed</label>
							<p>{championStats.movespeed}</p>
						</div>
						<div className={style['stat']}>
							<label className={style['gradient-text']}>Attack Range</label>
							<p>{championStats.attackrange}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
