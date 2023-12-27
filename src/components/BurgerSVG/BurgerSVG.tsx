import styles from './BurgerSVG.module.scss';

interface BurgerSVGProps {
    openMenu: () => void;
}

export default function BurgerSVG({openMenu}:BurgerSVGProps) {
	return (
		<div>
			<span onClick={openMenu} className={styles['header-menu-burger']}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="50"
					height="50"
					className={styles['svg-icon']}
				>
					<path d="M5 12H20" stroke="#424250" strokeWidth="2" strokeLinecap="round" />
					<path d="M5 17H20" stroke="#424250" strokeWidth="2" strokeLinecap="round" />
					<path d="M5 7H20" stroke="#424250" strokeWidth="2" strokeLinecap="round" />
				</svg>
			</span>
		</div>
	);
}
