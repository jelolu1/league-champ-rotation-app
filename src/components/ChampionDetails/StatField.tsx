import utilityStyle from '../../style/utility.module.scss';
import { StatFieldPropsType } from '../../types';
import style from './StatField.module.scss';

export const StatField = ({ name, value }: StatFieldPropsType) => {
	return (
		<div className={style.stat}>
			<label className={utilityStyle['gradient-text']}>{name}</label>
			<p>{value}</p>
		</div>
	);
};
