import styles from './ProgressSkill.module.scss';
import {CirclePercent} from '../../UI/CirclePercent/CirclePercent';



export function ProgressSkill(){

	
	return(

		<div  className={styles['circular-progress-wrap']}>
			<div className={styles['circular-progress']} >
				<CirclePercent currentPercent={100} />
				<span>
                    Russian
				</span>
			</div>
			<div className={styles['circular-progress']}>
				<CirclePercent currentPercent={90} />
				<span>
                    Ukrainian
				</span>
			</div>
			<div className={styles['circular-progress']}>
				<CirclePercent currentPercent={60} />
				<span>
                    English
				</span>
			</div>
						
		</div>
		
	);
}

