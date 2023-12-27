import styles from './HeaderMenu.module.scss';
import { useDoteContext} from '../../context/dote.context';
import { useBurgerContext } from '../../context/burger.context';
import BurgerSVG from '../BurgerSVG/BurgerSVG';
import { useState,useEffect } from 'react';


export default function HeaderMenu () {

	const [rotated, setRotated] =  useState(false);
    
	const {moveToRigth,setMoveToRigth } = useDoteContext();

	const {moveToLeft, setmoveToLeft } = useBurgerContext();

	
	const changeContext = () => {
		if (!setMoveToRigth)
			return;
		setMoveToRigth(prevState => !prevState );

	};
	
	const changeContextBlackout = () => {
		if (!setmoveToLeft)
			return;
		setmoveToLeft(prevState => !prevState);
	};


	useEffect(() => {
		setRotated(moveToRigth || moveToLeft);
	}, [moveToRigth, moveToLeft]);
	
	return(
		<>
			<div  className={styles['header-menu-wrap']}>
				<span onClick={changeContext} className={`${styles['header-menu-dote']} ${rotated ? styles['header-menu-dote-closed'] : ''}`}  > <img src='../../public/dots.png' alt='dote' /> </span>
			</div>
			<div>
				<span className={`${styles['header-menu-burger']} ${rotated ? styles['header-menu-burger-closed'] : ''}`} > <BurgerSVG openMenu={changeContextBlackout} /></span>
			</div>
		</>
	);
}