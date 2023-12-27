import { Avatar } from '../../components/Avatar/Avatar';
import styles from './InfoBar.module.scss';
import {ScrollBar} from '../../components/ScrollBar/ScrollBar.tsx';
import  ArtSocial  from '../../components/ArtSocial/ArtSocial.tsx';
import { useDoteContext } from '../../context/dote.context.ts';


export function InfoBar ()  {
	const { moveToRigth} = useDoteContext();

	
	return(
		
		<div className={`${styles['info-bar-wrap']} ${moveToRigth ? styles['open'] : ''}`} >
			<Avatar/>
			<ScrollBar />
			<ArtSocial />
		</div>
			
		
	);
}
