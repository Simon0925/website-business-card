import styles from './Artsocial.module.scss';

export function ArtSocial () {
	return(
		<>
			<div className={styles['art-social']}>
				<img src='../../public/artSocial/linkedin.svg' alt='linkedin' />
				<img src='../../public/artSocial/github.svg' alt='github' />
				<img src='../../public/artSocial/twitter.svg' alt='twitter' />
			</div>
		</>
	);
}