
import React from 'react';
import styles from './Burger.module.scss';




interface BurgerProps {
    rotated:boolean;
    handleClick: () => void;
	
}


const  Burger = React.memo(({ rotated, handleClick }: BurgerProps) => {
	
	
	

	return (
		<>
			<div  >
				<div  onClick={handleClick}  className={styles['burger-wrap']}>
					<div className={`${styles['burger-line']} ${rotated ? styles['burger-line2'] : ''}`}></div>
					<div className={`${styles['burger-line']} ${rotated ? styles['burger-line4'] : ''}`}></div>
					<div className={`${styles['burger-line']} ${rotated ? styles['burger-line3'] : ''}`}></div>
				</div>
			</div>
		</>
	);
});

export default Burger;
