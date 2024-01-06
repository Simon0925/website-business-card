import styles from './ContactCard.module.scss';

import { useState, useEffect } from 'react';

export default function ContactCard (){

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
				const response = await fetch('http://localhost:5038/api/website-buiness-card/contact-data-cards');
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
			}catch(error){
				console.log(error);
			}
		}
		getData();
	},[]);

	return<>
		<div className={styles['contact-card-wrap']} >
			<div className={styles['contact-card']}>
				<div className={styles['contact-table']}>
                    
					<ul>
						<li>
							<span>Country:</span>
							<p>{data.country}</p>
						</li>
						<li>
							<span>Coremonial county:</span>
							<p>{data.coremonialCounty}</p>
						</li>
						<li>
							<span>City:</span>
							<p>{data.city}</p>
						</li>
					</ul>
                    
				</div>
			</div>
			<div className={styles['contact-card']}>
				<div className={styles['contact-table']}>
                    
					<ul>
						<li>
							<span>Email:</span>
							<a href={data.email} >{data.email}</a>
						</li>
						<li>
							<span>Telegram:</span>
							<a href='@arter'>{data.telegram}</a>
						</li>
						<li>
							<span>Personal:</span>
							<a href={data.personal}>{data.personal}</a>
						</li>
					</ul>
                    
				</div>
			</div>
		</div>	
	</>;
}