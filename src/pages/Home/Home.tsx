import styles from './Home.module.scss';
import  WordPrint  from '../../UI/WordPrint/WordPrint';
import Button from '../../UI/Button/Button';

export function Home() {
	
	return (
		<>
			<div className={styles['baner-wrap']}>
				<div className={styles['baner-substrate']}></div>
				
				<div className={styles['baner-content-wrap']}>
					<div className={styles['baner-text-content']} >
						<p>Discover my Amazing</p>
						<p>Art Space!</p>	
					</div>
					<WordPrint />
					<Button children={'EXPLORE NOW'} />
				</div>
				
			</div>
		</>
	);
}
