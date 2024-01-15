import { useEffect, useState } from 'react';
import Footer from '../../layout/Footer/Footer';
import style from './Portfolio.module.scss';
import Spiner from '../../UI/Spiner/spiner';
import ErrorMassage from '../../components/ErrorMessage/ErrorMessage';

interface PortfolioInterface {
  h5: string;
  p: string;
  a: string;
  link: string;
  src: string;
}

export function Portfolio() {
	const [data, setData] = useState<PortfolioInterface[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	async function getData() {
		try {
			setIsLoading(true);
			const response = await fetch('http://localhost:5045/api/portfolio');
			const data = await response.json();
			setData(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
			setError(String(error));
			return;
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div className={style['portfolio-page']}>
				<h4>Portfolio</h4>
				<div className={style['portfolio-wrap']}>
					{error &&<ErrorMassage /> }
					{!isLoading && data.map((element, index) => (
						<div key={index} className={style['portfolio-container']} style={{ backgroundImage: `url(${element.src})` }}>
							<div className={style['portfolio-ditails']}>
								<h5>{element.h5}</h5>
								<p>{element.p}</p>
								<a href={element.link}>READ NOW<span>{' >'}</span></a>
							</div>
						</div>
					))}
					{isLoading && <Spiner />}
					
				</div>
			</div>
			<Footer />
		</>
	);
}
