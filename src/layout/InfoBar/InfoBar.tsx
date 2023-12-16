import { Avatar } from '../../components/Avatar/Avatar';
import styles from './InfoBar.module.scss';
import {ScrollBar} from '../../components/ScrollBar/ScrollBar.tsx';
import { ArtSocial } from '../../components/ArtSocial/Artsocial.tsx';


export function InfoBar ()  {
	return(
		<div className={styles['info-bar-wrap']}>
			<Avatar/>
			<ScrollBar />
			<ArtSocial />
		</div>
	);
}
