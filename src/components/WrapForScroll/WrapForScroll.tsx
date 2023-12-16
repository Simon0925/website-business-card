import {HTMLAttributes} from 'react';
import styles from './WrapForScroll.module.scss';

export interface ProgressBarWrapProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode,
}

export function WrapForScroll({
	children,
	...props
}: ProgressBarWrapProps){
	return(
		<div
			className={styles['language-progress-wrap']}
			{...props}
		>
			{children}
		</div>
	);
}