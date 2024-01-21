import styles from './ContactCard.module.scss';

import { useState, useEffect } from 'react';
import ContactTable from './ContactTable/ContactTable';
import Spiner from '../../UI/Spiner/spiner';
import ErrorMassage from '../ErrorMessage/ErrorMessage';
import HOST from '../../../configHost';

export default function ContactCard (){

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const [data, setData] = useState({
		country:'',
		coremonialCounty:'',
		city:'',
		email:'',
		telegram:'',
		personal:''
	});

	useEffect(()=>{
		async function getData() {
			try{
				setIsLoading(true);
				
				const response = await fetch(`${HOST}:5045/api/contact-data-cards`);
      			const data = await response.json();
				const result = data[0];
				setData({
					country:result.country,
					coremonialCounty:result.coremonialCounty,
					city:result.city,
					email:result.email,
					telegram:result.telegram,
					personal:result.personal
				});
				setIsLoading(false);

			}catch(error){

				setIsLoading(false);
				setError(String(error));
			}
		}
		getData();
	},[]);

	return<>
		{error &&<ErrorMassage /> }

		{!isLoading && <div className={styles['contact-card-wrap']} >
			<div className={styles['contact-card']}>
				<ContactTable title1={'Country:'}
				 dataTitle1={data.country} 
				 title2={'Coremonial county:'} 
				 dataTitle2={data.coremonialCounty} 
				 title3={'City:'} 
				 dataTitle3={data.city} />
			</div>
			<div className={styles['contact-card']}>
				<ContactTable title1={'Email:'}
				 dataTitle1={data.email} 
				 title2={'Telegram:'} 
				 dataTitle2={data.telegram} 
				 title3={'Personal:'} 
				 dataTitle3={data.personal} />
			</div>
		</div>}
		
		{isLoading && <Spiner />}

	</>;
}