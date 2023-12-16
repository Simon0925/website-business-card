import styles from './Progress.module.scss';

import  { useEffect, useState } from 'react';

interface ProgressProps {
	text: string,
	percent: number,
}

export default function Progress ({
	text,
	percent
}: ProgressProps)  {
	const [currentValue, setCurrentValue] = useState<number>(0);
    

	useEffect(()=>{
		if (currentValue < percent) {
			setTimeout(() => {
				setCurrentValue((prev)=>prev + 1);
			}, 25);
		}
	});

	const styleProgress = {
		width:`${currentValue + '%'}`
	};

	return(
		<>
			<div className={styles['skills-bar-wrap']}>
				<div className={styles['label-content']}>
					<label>{text}</label>
					<span>{currentValue + '%'}</span>
				</div>
			</div><div className={styles['progress-bar-B']}>
				<div className={styles['progress-bar-M']}>
					<div style={styleProgress} className={styles['progress-bar-S']}></div>
				</div>
			</div>
		</>
	);
}

