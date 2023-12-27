
import Burger from '../../components/Burger/Burger';
import { NavBar } from '../../components/NavBar/NavBar';
import styles from './Header.module.scss';
import { useState,useEffect } from 'react';
import { useBurgerContext } from '../../context/burger.context';



export function Header ()  {

	const [rotated, setRotated] = useState(false);

	const handleClick = () => {
		setRotated(!rotated);
	};

	const {moveToLeft, setmoveToLeft } = useBurgerContext();

	useEffect(()=>{
		
		moveToLeft == false?setRotated(rotated):setRotated(!rotated);
		
		
	},[moveToLeft]);


	const changeContext = () => {
		if (!setmoveToLeft)
			return;
		setmoveToLeft(p => !p);
	};
	

	return(
		
		<div className={`${styles['header-wrap']} ${rotated ? styles['header-wrap2'] : ''}`}>
			<div className={styles['burger-wrap']}>
				<Burger  rotated={rotated} handleClick={()=>{handleClick();changeContext();} } />
			</div>
			
			<NavBar rotated={rotated} />
		</div>
	);
}