import { motion } from 'framer-motion';
import { height, mountAnim } from '../lib';
import * as styles from './Menu.css';

const Stairs = () => {
	return (
		<>
			{[...Array(5)].map((_, index) => (
				<motion.div
					variants={height}
					{...mountAnim}
					custom={4 - index}
					className={styles.stair}
				/>
			))}
		</>
	);
};

export default Stairs;