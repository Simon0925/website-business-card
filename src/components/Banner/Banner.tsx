import Button from '../../UI/Button/Button';
import WordPrint from '../../UI/WordPrint/WordPrint';
import styles from './Banner.module.scss';

export default function Bunner (){
	return<>
		<div className={styles['baner-wrap']}>
			<div className={styles['baner-substrate']}></div>
			<div className={styles['baner-content-wrap']}>
				<div className={styles['baner-text-content']} >
					<p>Discover my Amazing</p>
					<p>Art Space!</p>	
				</div>
				<WordPrint />
				<span className={styles['btn']}>
					<Button children={'EXPLORE NOW'} />
				</span>
			</div>
		</div>
	</>;
}