import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;

}


export default function Button ({children}:ButtonProps){
	return <>
		<button className={styles['baner-button']} >
			{children}
		</button>
	</>;
}