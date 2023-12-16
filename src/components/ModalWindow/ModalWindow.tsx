import styles from './ModalWindow.module.scss';



interface ModalWindowProps {
	clouseModal: (param:boolean) => void,
    photo:string
}

export default function ModalWindow({clouseModal,photo}:ModalWindowProps){
	return <>
		<div onClick={()=> clouseModal(false)} className={styles['modal-window-wrap']}>
			<div className={styles['modal-conteniner']} >
				<div className={styles['modal-content']} >
					<img className={styles['modal-content']} src={photo} alt="photo" />
				</div>
			</div>
		</div>
	</>;
}