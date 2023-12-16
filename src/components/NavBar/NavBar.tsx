import styles from './NavBar.module.scss';
import {  NavLink } from 'react-router-dom';



export function NavBar ()  {
	
	return(
		<>
			<nav className={styles['nav-bar']}>
				<NavLink   className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']}  to={'/'} >HOME</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/contact'} >CONTACT</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/resume'} >RESUME</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/services'} >SERVICES</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/works'} >WORK</NavLink>
			</nav>
		</>
	);
}