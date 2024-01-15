import CloseSVG from '../../SVG/CloseSVG/CloseSVG';
import styles from './ModalWindow.module.scss';
import {  useState } from 'react';


interface ModalWindowProps {
	closeModal: React.Dispatch<React.SetStateAction<boolean>>,
    photo:string | undefined
}

export default function ModalWindow({
	closeModal,
	photo
}:ModalWindowProps){
	var [imgHovered, setImgHovered] = useState(false);

	const [isHovered, setIsHovered] = useState(false);
	
	return <>
		<div
			
			className={styles['modal-content']}
			onClick={() => {
				if (!imgHovered)
					closeModal(false);
			}}
		>
			<span 
				className={styles['close-btn']}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			><CloseSVG isHovered={isHovered}   /></span>
			
		
			<img
				onClick={() => {
					
					closeModal(true);
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