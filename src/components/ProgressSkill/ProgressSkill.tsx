import styles from './ProgressSkill.module.scss';
import {CirclePercent} from '../../UI/CirclePercent/CirclePercent';
import { useEffect, useState } from 'react';
import Spiner from '../../UI/Spiner/spiner';

interface progressData{
	name:string;
	percent:number
}


export function ProgressSkill(){

	const [data, setDataProgress] = useState<progressData[]>([]);

	const [isLoading, setIsLoading] = useState(false);



	async function getData() {
		try{
			setIsLoading(true);
			const response = await fetch('http://localhost:5045/api/progress');
			const data = await response.json();
			setDataProgress(data);
			setIsLoading(false);
		}catch(error){
			console.log(error);
		}
	}

	useEffect(()=>{
		getData();
	},[]);

	
	return(

		<div  className={styles['circular-progress-wrap']}>

			{!isLoading && data.map((elem, index) => (
				<div key={index} className={styles['circular-progress']} >
					<CirclePercent currentPercent={elem.percent} />
					<span>
						{elem.name}
					</span>
				</div>
			))}
			{isLoading&& <Spiner />}
		</div>
		
	);
}

