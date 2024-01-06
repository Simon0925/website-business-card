import styles from './Main.module.scss';
import { Home } from '../../pages/Home/Home';
import  Contact  from '../../pages/Contact/Contact';
import { Resume } from '../../pages/Resume/Resume';
import { Error } from '../../pages/Error/Error';
import  Services  from '../../pages/Services/Services';
import { Portfolio } from '../../pages/Portfolio/Portfolio';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { useState,useEffect } from 'react';


import { BurgerContext } from '../../context/burger.context';

import {DoteContext} from '../../context/dote.context';

export function Main() {
	const { moveToLeft } = useContext(BurgerContext);
	const { moveToRigth } = useContext(DoteContext);
	const [display, setDisplay] = useState(moveToLeft);
  
	useEffect(() => {
		setDisplay(moveToLeft);
		
	}, [moveToLeft]);
	useEffect(() => {
		setDisplay(moveToRigth);
	
	}, [moveToRigth]);
	
	return (
		<>
			<div className={`${styles['clouse']} ${display ? styles['open'] : ''}`} ></div>
			<main  className={styles['main']}>
			
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/services" element={<Services />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Outlet />
			</main>
		
			
		</>
	);
}
