import HOST from '../../../configHost';
import DownloadSVG from '../../SVG/DownloadSVG/DownloadSVG';
import styles from './DownloadCv.module.scss';
import { useState } from 'react';


export function DownloadCv () {
	const [isHovered, setIsHovered] = useState(false);
	async function handleDownload(){
		try{
			const response  = await fetch(`${HOST}:5045/download/CV-Yakovenko-Semen.docx`);
			if (response.ok) {
		
				const blob = await response.blob();
				
				const link = document.createElement('a');
				link.href = window.URL.createObjectURL(blob);
				link.download = 'CV-Yakovenko-Semen.docx';
	
				document.body.appendChild(link);
				link.click();

				document.body.removeChild(link);
			 } else {
				console.error('File download failed:', response.status, response.statusText);
			  }
		}catch(error){
			if (error instanceof Error) {
				console.error('Error:', error.message);
			} else {
				console.error('Unknown error occurred.');
			}
		}
	}
	return(
		<>
			<div className={styles['download-wrap']}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<span onClick={handleDownload}>DOWNLOAD CV <DownloadSVG isHovered={isHovered}  /></span> 
			</div>
			
		</>
	);
}