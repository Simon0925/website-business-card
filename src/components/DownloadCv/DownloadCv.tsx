import DownloadSVG from '../../SVG/DownloadSVG/DownloadSVG';
import styles from './DownloadCv.module.scss';
import { useState } from 'react';


export function DownloadCv () {
	const [isHovered, setIsHovered] = useState(false);
	return(
		<>
			<div className={styles['download-wrap']}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<span>DOWNLOAD CV <DownloadSVG isHovered={isHovered}  /></span> 
			</div>
			
		</>
	);
}