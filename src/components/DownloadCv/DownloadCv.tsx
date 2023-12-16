import styles from './DownloadCv.module.scss';


export function DownloadCv () {
	return(
		<>
			<div className={styles['download-wrap']}>
				<span>DOWNLOAD CV <img src="../../public/download/download.svg" alt="" /></span> 
			</div>
			
		</>
	);
}