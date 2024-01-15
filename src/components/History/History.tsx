
import CV from '../CV/CV';
import styles from './History.module.scss';
import {  useEffect, useState } from 'react';
import Spiner from '../../UI/Spiner/spiner';
import ErrorMassage from '../ErrorMessage/ErrorMessage';
import ModalWindow from '../ModalWindow/ModalWindow';
import ReactDOM from 'react-dom';

 interface CVData {
	_id: string;
	name: string;
	role: string;
	date: string;
	description: string;
	confirmation: string;
	src:string;
  }

export default function History() {

	var modalRoot = document.getElementById('modal-root');


	const [dataEducation, setDataEducation] = useState<CVData[]>([]);
	const [dataWork, setDataWork] = useState<CVData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	
	const [openModal, setOpenModal] = useState(false);
	const [photo,setPhoto] = useState<string | undefined>();

	const workData = async function (): Promise<void> {
		try {
			setIsLoading(true);
			const response = await fetch('http://localhost:5045/api/home-page');
			const res = await response.json();
			setDataWork(res.workHistory);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
			setError(String(error));
			return;
		}
	};

	useEffect(() => {
		workData();
		educationData();
	}, []);

	const educationData = async function (): Promise<void> {
		try {
			const response = await fetch('http://localhost:5045/api/home-page');
			const res = await response.json();
			setDataEducation(res.Education);
		} catch (error) {
			setError(String(error));
			
		}
	};

	

	
	return (
		<>
			<div className={styles['box-content']}>
				<div className={styles['content-block01']} >
					<div className={styles['content-block-name']} >Education</div>
					{error &&<ErrorMassage /> }
					{!isLoading && dataEducation.map((elem) => (
						
						<CV
							key={elem._id}
							name={elem.name}
							role={elem.role}
							date={elem.date}
							description={elem.description}
							confirmation={elem.confirmation}
							modalState={setOpenModal}
							photoState={() => setPhoto(elem.src)} src={elem.src} />
					))
					}
					{isLoading && <Spiner />}
				</div>
				<div className={styles['content-block02']}>
					<div className={styles['content-block-name']}>Work History</div>
					{error &&<ErrorMassage /> }
					{ !isLoading && dataWork.map((elem) => (
						<CV
							key={elem._id}
							name={elem.name}
							role={elem.role}
							date={elem.date}
							description={elem.description}
							confirmation={elem.confirmation}
							modalState={setOpenModal}	
							photoState={() => setPhoto(elem.src)} src={elem.src}	
						/>
					))
					}
					{isLoading && <Spiner />}
					
					
				</div>
			</div>
			{
				openModal && modalRoot &&
				ReactDOM.createPortal(
					<ModalWindow photo={photo} 
						closeModal={setOpenModal}/>,
					modalRoot)
			}
		</>
	);
}
