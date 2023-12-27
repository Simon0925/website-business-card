import styles from './Footer.module.scss';

const Footer = function () {
	return <>
		<footer >
			<div className={styles['footer']}>
				<div className={styles['content']}>
					<span className={styles['text']}>© 2023 All Rights Reserved.</span>
					<span className={styles['email']} >Email: admin@bslthemes.com</span>
				</div>
			</div>
		</footer>
	</>;
};


export default Footer;