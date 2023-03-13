import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import utilityStyle from '../../style/utility.module.scss';
import style from './index.module.scss';
import { InfoField } from './InfoField';
import { StatField } from './StatField';

export const ChampionDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [isVisible, setIsVisible] = useState<boolean>(true);
	const championId = location.state.id;
	const championName = location.state.name;
	const championTitle = location.state.title;
	const championBlurb = location.state.blurb;
	const championInfo = location.state.info;
	const championStats = location.state.stats;

	const backClickHandler = () => {
		setIsVisible(false);
	};

	useEffect(() => {
		!isVisible && setTimeout(() => navigate('/'), 500);
	}, [isVisible]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ x: -2000 }}
					animate={{ x: 0 }}
					exit={{ x: 2000 }}
					transition={{ duration: 0.5 }}
				>
					<div onClick={backClickHandler} className={style['back-btn']}>
						<svg height="48" viewBox="0 96 960 960">
							<path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
						</svg>
						CHAMPIONS LIST
					</div>
					<div className={style['champion-container']}>
						<img
							src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`}
							alt={championName}
							className={style['champion-img']}
						/>

						<div className={style['champion-data']}>
							<h2 className={style['champion-name']}>{championName}</h2>
							<h3
								className={`${utilityStyle['gradient-text']} ${style['champion-label']}`}
							>
								{championTitle.toUpperCase()}
							</h3>
							<p className={style['champion-blurb']}> {championBlurb}</p>
							<h3 className={style['champion-label']}>INFO</h3>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1 }}
								className={style['champion-info']}
							>
								<InfoField name="Attack" value={championInfo.attack} />
								<InfoField name="Defense" value={championInfo.defense} />
								<InfoField name="Magic" value={championInfo.magic} />
								<InfoField name="Difficulty" value={championInfo.difficulty} />
							</motion.div>
							<h3 className={style['champion-label']}>STATS</h3>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1 }}
								className={style['stats-grid']}
							>
								<StatField name={'HP'} value={championStats.hp} />
								<StatField
									name={'HP per Lvl.'}
									value={championStats.hpperlevel}
								/>
								<StatField name={'MP'} value={championStats.mp} />
								<StatField
									name={'MP per Lvl.'}
									value={championStats.mpperlevel}
								/>
								<StatField name={'Armor'} value={championStats.armor} />
								<StatField
									name={'Armor per Lvl.'}
									value={championStats.armorperlevel}
								/>
								<StatField
									name={'Spell Block'}
									value={championStats.spellblock}
								/>
								<StatField
									name={'Spell Block per Lvl.'}
									value={championStats.spellblockperlevel}
								/>
								<StatField name={'HP Regen'} value={championStats.hpregen} />
								<StatField
									name={'HP Regen per Lvl.'}
									value={championStats.hpregenperlevel}
								/>
								<StatField name={'MP Regen'} value={championStats.mpregen} />
								<StatField
									name={'MP Regen per Lvl.'}
									value={championStats.mpregenperlevel}
								/>
								<StatField name={'Critic'} value={championStats.crit} />
								<StatField
									name={'Critic per Lvl.'}
									value={championStats.critperlevel}
								/>
								<StatField
									name={'Attack Dmg.'}
									value={championStats.attackdamage}
								/>
								<StatField
									name={'Attack Dmg. per Lvl.'}
									value={championStats.attackdamageperlevel}
								/>
								<StatField
									name={'Attack Speed'}
									value={championStats.attackspeed}
								/>
								<StatField
									name={'Attack Speed per Lvl.'}
									value={championStats.attackspeedperlevel}
								/>
								<StatField
									name={'Move Speed'}
									value={championStats.movespeed}
								/>
								<StatField
									name={'Attack Range'}
									value={championStats.attackrange}
								/>
							</motion.div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
