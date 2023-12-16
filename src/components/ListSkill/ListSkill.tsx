import styles from './ListSkill.module.scss';


export function ListSkill () {
	return(
		<>
        
			<div className={styles['list-skill-wpap']}>
				<div className={styles['list-skill']}>
					<span>
						<img  src='../../../public/check/check.svg'  alt="check" /> Bootstrap, Materialize
					</span>
				</div>
				<div className={styles['list-skill']}>
					<span>
						<img  src='../../../public/check/check.svg'  alt="check" /> Stylus, Sass, Less
					</span>
				</div>
				<div className={styles['list-skill']}>
					<span>
						<img  src='../../../public/check/check.svg'  alt="check" /> Gulp, Webpack, Grunt
					</span>
				</div>
				<div className={styles['list-skill']}>
					<span>
						<img  src='../../../public/check/check.svg'  alt="check" /> GIT knowledge
					</span>
				</div>
				
			</div>
			
		</>
	);
}