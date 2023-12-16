import styles from './ScrollbarPersonalData.module.scss';


export function ScrollBarPersonalData ()  {
	return(
		
		<>
			
			<div className={styles['personal-data']}>

				<div className={styles['personal-data-item1']}>
					<h6>
                        Residence:
					</h6>
					<h6>
                        City:
					</h6>
					<h6>
                        Age:
					</h6>
				</div>
				<div className={styles['personal-data-item2']}>
					<h6>
					United Kingdom
					</h6>
					<h6>
					Portsmouth
					</h6>
					<h6>
                        28
					</h6>
				</div>
			</div>
                   
		</>
		
	);
}

