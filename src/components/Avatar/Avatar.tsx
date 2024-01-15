import styles from './Avatar.module.scss';
import PointFlicker from '../../UI/PointFlicker/PointFlicker';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useMemo, useState } from 'react';

import ReactDOM from 'react-dom';
import { useDoteContext } from '../../context/dote.context';


export function Avatar ()  {
	const [openModal,setOpenModal] = useState(false);

	const config = useMemo(() => styles['point'], []);
	
	var modalRoot = document.getElementById('modal-root');
	

	const {setMoveToRigth } = useDoteContext();

	const changeContext = () => {
		if (!setMoveToRigth)
			return;
		setMoveToRigth(p => !p );

	};

	return(
		
		<div className={styles['avatar-block']}>
			<span onClick={changeContext} className={styles['dote']}>
				<img src='../../public/dots.png' alt='dote' /> 
			</span>

			<span className={styles['avatar-wrap']} onClick={()=>setOpenModal(true)} >
				<div className={styles['avatar']}>
					<img src="../../public/square.svg" alt="avatar" />
				</div>
			</span>
			<PointFlicker style={config} />	
			<span className={styles['avatar-name']}>Sam Yakoveko</span>
			<span className={styles['avatar-text']}>Front-end Developer</span>
			{
				openModal && modalRoot &&
				ReactDOM.createPortal(
					<ModalWindow photo='../../public/avatar/avatr.jpg' closeModal={()=>setOpenModal(false)}/>,
					modalRoot)
			}
		</div>
		
	);
}