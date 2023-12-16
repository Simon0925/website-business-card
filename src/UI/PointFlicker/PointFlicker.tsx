import styles from './PointFlicker.module.scss';

interface PointFlickerProps {
	style: string,
   
}

export default function PointFlicker({style}:PointFlickerProps){
	return <>
		<div className={styles['point-flicker'] + ' ' + style} ></div>
	</>;
}