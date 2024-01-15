import Button from '../../UI/Button/Button';
import WordPrint from '../../UI/WordPrint/WordPrint';
import styles from './Banner.module.scss';


export default function Bunner (){
	return<>
		<div className={styles['baner-wrap']}>
			<div className={styles['baner-content-wrap']}>
				<div className={styles['baner-text-content']} >
					<p>Discover my Amazing</p>
					<p>Art Space!</p>	
				</div>
				<WordPrint />
				<span className={styles['btn']}>
					<a href='http://localhost:5173/portfolio'><Button children={'EXPLORE NOW'} /></a>
				</span>
			</div>
		</div>
	</>;
}