import styles from './ModalWindow.module.scss';
import { useState } from 'react';


interface ModalWindowProps {
	clouseModal: React.Dispatch<React.SetStateAction<boolean>>,
    photo:string
}

export default function ModalWindow({
	clouseModal,
	photo
}:ModalWindowProps){
	var [imgHovered, setImgHovered] = useState(false);

	return <>
		<div
			className={styles['modal-content']}
			onClick={() => {
				if (!imgHovered)
					clouseModal(false);
			}}
			
			
		>
			<img
				onClick={() => {
					
					clouseModal(true);
				}}
				onMouseEnter={() => setImgHovered(true)}
				onMouseLeave={() => setImgHovered(false)}
				
				className={styles['modal-content__photo']}
				src={photo}
				alt="photo"
			/>
		</div>
	</>;
}