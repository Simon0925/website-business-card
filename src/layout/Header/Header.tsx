import { NavBar } from '../../components/NavBar/NavBar';
import styles from './Header.module.scss';


export function Header ()  {
	return(
		<div className={styles['header-wrap']}>
			<NavBar />
		</div>
	);
}