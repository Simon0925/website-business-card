import GithubSVG from '../../SVG/GithubSVG/GithubSVG';
import LinkedinSVG from '../../SVG/LinkedinSVG/LinkedinSVG';
import TwitterSVG from '../../SVG/TwitterSVG/TwitterSVG';
import styles from './Artsocial.module.scss';

export default function ArtSocial () {
	return(
		<>
			<div className={styles['art-social']}>
				<LinkedinSVG />
				<GithubSVG />
				<TwitterSVG />
			</div>
		</>
	);
}