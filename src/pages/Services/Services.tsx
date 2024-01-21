import { useEffect, useState } from 'react';
import Footer from '../../layout/Footer/Footer';
import styles from './Services.module.scss';
import ErrorMassage from '../../components/ErrorMessage/ErrorMessage';
import Spiner from '../../UI/Spiner/spiner';
import HOST from '../../../configHost';


interface serviceInterface{
	a:string,
	h5:string,
	href:string,
	p:string
}

export default function Services() {

	const [data, setData] = useState<serviceInterface[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	async function getData(){
		try{
			setIsLoading(true);
			const response = await fetch(`${HOST}:5045/api/services`);
			const data = await response.json();
			console.log(data);
			setData(data);
			setIsLoading(false);
		}catch(error){
			console.error(error);
			setIsLoading(false);
			setError(String(error));
			return;
		}
	}

	useEffect(() => {
		getData();
	}, []);
	

	return <>
		<div className={styles['my-services-wrap']}>
			<h4>My Services</h4>
			<div className={styles['my-services']}>
				{error &&<ErrorMassage /> }
				{data.map((element, index) => (
					<div key={index} className={styles['my-service-block']}>
						<div className={styles['my-service-content']}>
							<h5>{element.h5}</h5>
							<p>{element.p}</p>
							<a href={element.href}>ORDER NOW<span>{' >'}</span></a>
						</div>
					</div>
				))}
				{isLoading && <Spiner />}
			</div>
		</div>
		<Footer />
	</>;
}