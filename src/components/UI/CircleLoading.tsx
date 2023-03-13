import { motion } from 'framer-motion';
import style from './CircleLoading.module.scss';

export const CircleLoading = () => {
	const spinTransition = {
		repeat: Infinity,
		duration: 1.5,
		ease: 'linear',
	};
	return (
		<motion.div className={style.container}>
			<motion.span
				className={style.circle}
				animate={{ rotate: 360 }}
				transition={spinTransition}
			/>
		</motion.div>
	);
};
