import styles from './NavBar.module.scss';
import {  NavLink } from 'react-router-dom';

interface NavBarProps{
    rotated:boolean;

}

export function NavBar ({rotated}:NavBarProps)  {

	
	
	return(
		<>
			<nav  className={`${styles['nav-bar']} ${rotated ? styles['nav-bar2'] : ''}`}>
				<NavLink   className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']}  to={'/'} >HOME</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/contact'} >CONTACT</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/resume'} >RESUME</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/services'} >SERVICES</NavLink>
				<NavLink  className={({isActive})=>isActive ? styles['active-link']:styles['nav-bar-link']} to={'/portfolio'} >PORTFOLIO</NavLink>
			</nav>
		</>
	);
}