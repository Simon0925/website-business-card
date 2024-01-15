import { useEffect, useState } from 'react';
import styles from './ListSkill.module.scss';
import Spiner from '../../UI/Spiner/spiner';

interface listSkillInterface {
	name:string
}


export function ListSkill () {

	const [data, setData] = useState<listSkillInterface[]>([]);

	const [isLoading, setIsLoading] = useState(false);

	async function getDaat() {
		try{
			setIsLoading(true);
			const response = await fetch('http://localhost:5045/api/listSkill');
			const data = await response.json();
			setData(data[0]);
			setIsLoading(false);
		}catch(error){
			console.log(error);
		}
	}

	useEffect(()=>{
		getDaat();
	},[]);


	return(
		<>
			{!isLoading &&
			<div className={styles['list-skill-wpap']}>
				{data.map((elem,index)=>(
					<div key={index} className={styles['list-skill']}>
						<span>
							<img  src='../../../public/check/check.svg'  alt="check" /> {elem.name}
						</span>
					</div>
				))}
			</div>}
			{isLoading && <Spiner />}
		</>
	);
}