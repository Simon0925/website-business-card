import { useEffect, useState } from 'react';
import styles from './ScrollbarPersonalData.module.scss';
import Spiner from '../../UI/Spiner/spiner';
import HOST from '../../../configHost';

interface ScrollBarPersonalDataInterface{
	residence:string;
	city:string;
	age:string
} 


export function ScrollBarPersonalData ()  {

	const [data,setData] = useState<ScrollBarPersonalDataInterface[]>([]);
	const [isLoading,setIsLoading] = useState(false);

	async function getData() {
		try{
			setIsLoading(true);
			const response = await fetch(`${HOST}:5045/api/scroll-personal-data`);
			const data = await response.json();
			setData(data[0]);
			setIsLoading(false);
		}catch(error){
			console.log(error);
		}
	}

	useEffect(()=>{
		getData();
	},[]);

	return(
		
		<>
			{!isLoading &&
			<div className={styles['personal-data']}>

				<div className={styles['personal-data-item1']}>
					<h6>
                        Residence:
					</h6>
					<h6>
                        City:
					</h6>
					<h6>
                        Age:
					</h6>
				</div>

				{data.map((elem,index)=>( 
					<div key={index} className={styles['personal-data-item2']}>
						<h6>
							{elem.residence}
						</h6>
						<h6>
							{elem.city}
						</h6>
						<h6>
							{elem.age}
						</h6>
					</div>
				))}
			</div>}
			{isLoading && <Spiner />}
                   
		</>
		
	);
}

