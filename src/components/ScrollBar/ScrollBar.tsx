import styles from './ScrollBar.module.scss';
import { ProgressSkill } from '../ProgressSkill/ProgressSkill';
import {ScrollBarPersonalData} from '../ScrollbarPersonalData/ScrollbarPersonalData';
import {WrapForScroll} from '../WrapForScroll/WrapForScroll';
import Progress from '../../UI/Progress/Progress';
import { ListSkill } from '../ListSkill/ListSkill';
import {DownloadCv} from '../DownloadCv/DownloadCv';
import { useEffect, useState } from 'react';
import Spiner from '../../UI/Spiner/spiner';
import HOST from '../../../configHost';

interface ProgressDataInterface{
	name:string;
	percent:number;
	id:string
}
 
export function ScrollBar ()  {
	const [progressData, setProgressData] = useState<ProgressDataInterface[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	async function getProgressData () {
		try{
			setIsLoading(false);
			const response = await fetch(`${HOST}:5045/api/programSkills`);
			const data = await response.json();
			console.log();
			setProgressData(data[0]);
			setIsLoading(true);
		}catch(error){
			console.log(error);
		}
	}

	useEffect(()=>{
		getProgressData();
	},[]);

	return (
		<div className={styles['scroll-bar']} >
			<WrapForScroll>
				<ScrollBarPersonalData />
			</WrapForScroll>
			<WrapForScroll>
				<ProgressSkill />
			</WrapForScroll>
			<WrapForScroll>
				{isLoading &&
    			progressData.map((elem,index) => (
    				<div key={index} style={{ width: '100%' }}>
    					<Progress text={elem.name} percent={elem.percent} />
    				</div>
    			))}
				{!isLoading && <Spiner />}
			</WrapForScroll>
			<WrapForScroll>
				<ListSkill />
			</WrapForScroll>
			<DownloadCv />
		</div>
		
	);
}