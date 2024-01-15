import styles from './CV.module.scss';


interface CVWorkProps {
	name: string;
    role: string;
	date: string;
	description: string;
	confirmation: string;
	photoState:React.Dispatch<React.SetStateAction<string | undefined | void>>;
	modalState:React.Dispatch<React.SetStateAction<boolean>>;
	src:string
	
}




export default function CV ({name,role,date,description,confirmation,modalState,photoState,src}:CVWorkProps) {

	const arrow:string = '>'; 

	

	return <>
		<div  className={styles['content']}>
			<div className={styles['content2']} >
				<div className={styles['header-content']}>
					<div className={styles['left-header-content']}>
						<h5>{name}</h5>
						<span>{role}</span>
					</div>
					<div className={styles['date-wrap']}>
						<div className={styles['date']}>
							<span>{date}</span>
						</div>
					</div>
				</div>
				<div className={styles['description-content']}>{description}</div>
				<a className={styles['link-content']} >{confirmation.length === 0 ? null : <div 
					onClick={()=>{
						modalState(true);
						photoState(src);
					}
					}>{confirmation}<span>{arrow}</span></div>}</a>
			</div>
			
		</div>
	</>;
}