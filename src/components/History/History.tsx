
import CV from '../CV/CV';
import styles from './History.module.scss';
import { useEffect, useState } from 'react';




interface CVData {
	id: string;
	name: string;
	role: string;
	date: string;
	description: string;
	confirmation: string;
  }

export default function History() {
	const [dataEducation, setDataEducation] = useState<CVData[]>([]);
	const [dataWork, setDataWork] = useState<CVData[]>([]);

	const workData = async function (): Promise<void> {
		try {
			const response = await fetch('http://localhost:5173/JSON/data.json');
			const res = await response.json();
			setDataWork(res.workHistory);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		workData();
	}, []);

	const educationData = async function (): Promise<void> {
		try {
			const response = await fetch('http://localhost:5173/JSON/data.json');
			const res = await response.json();
			setDataEducation(res.education);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		educationData();
	}, []);
	return (
		<>
			<div className={styles['box-content']}>
				<div className={styles['content-block01']} >
					<div className={styles['content-block-name']} >Education</div>
					{dataEducation.length > 0 ? (
						dataEducation.map((elem) => (
							<CV
								key={elem.id}
								name={elem.name}
								role={elem.role}
								date={elem.date}
								description={elem.description}
								confirmation={elem.confirmation}
							/>
						))
					) : (
						<p>Loading education data...</p>
					)}
					
				</div>
				<div className={styles['content-block02']}>
					<div className={styles['content-block-name']}>Work History</div>
					
					{dataWork.length > 0 ? (
						dataWork.map((elem) => (
							<CV
								key={elem.id}
								name={elem.name}
								role={elem.role}
								date={elem.date}
								description={elem.description}
								confirmation={elem.confirmation}
							/>
						))
					) : (
						<p>Loading work data...</p>
					)}
					
					
				</div>
			</div>
		</>
	);
}
