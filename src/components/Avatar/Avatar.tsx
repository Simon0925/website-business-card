import styles from './Avatar.module.scss';
import PointFlicker from '../../UI/PointFlicker/PointFlicker';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useState } from 'react';

import ReactDOM from 'react-dom';

export function Avatar ()  {
	const [openModal,setOpenModal] = useState(false);
	
	const config:string = styles['point'];

	return(
		
		<div className={styles['avatar-block']}>
			<span className={styles['avatar-wrap']} onClick={()=>setOpenModal(true)} >
				<div className={styles['avatar']}>
					<img src="../../public/square.svg" alt="avatar" />
				</div>
			</span>
			<PointFlicker style={config} />	
			<span className={styles['avatar-name']}>Sam Yakoveko</span>
			<span className={styles['avatar-text']}>Front-end Deweloper</span>

			{openModal && ReactDOM.createPortal( <ModalWindow photo='../../public/avatar/avatr.jpg' clouseModal={setOpenModal}/>, document.getElementById('modal-root')) }
		</div>
		
	);
}