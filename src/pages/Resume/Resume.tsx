import { useEffect, useState } from 'react';
import Footer from '../../layout/Footer/Footer';
import style from './Resume.module.scss';
import resumeData from './interface';
import ErrorMassage from '../../components/ErrorMessage/ErrorMessage';
import Spiner from '../../UI/Spiner/spiner';
import HOST from '../../../configHost';


export function Resume() {

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	const [data, setData] = useState<resumeData>({
		resume:{
			leftSide:{
				aboutMe:{
					text:'',
					title:''
				},
				hardSkills:{
					skills:[],
					title:''
				},
				languages:{
					languagesData:[],
					title:''
				},
				softSkills:{
					skills:[],
					title:''
				}

			},
			rightSide:{
				educationAndTraining:[],
				headerData:{
					contactData:[],
					name:'',
					speciality:'',
					surname:''
				},
				hobbiesAndInterests:'',
				workExperiences:[]
			}
		}
	});


	
	
	
	async function getData() {
		try {
			setIsLoading(true);
			const response = await fetch(`${HOST}:5045/api/resume`);
			const result = await response.json();
			const data = result.resumeData[0];
			setData(data);
			setIsLoading(true);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
			setError(String(error));
			return;
		}
	}
	useEffect(() => {
		getData();
		
	},[]);
	

	const hardSK = data.resume.leftSide.hardSkills.skills;

	const softSK = data.resume.leftSide.softSkills.skills;

	const language = data.resume.leftSide.languages.languagesData;

	const contact = data.resume.rightSide.headerData.contactData;

	const workExperiences = data.resume.rightSide.workExperiences;

	const education = data.resume.rightSide.educationAndTraining;

	const hobbi = data.resume.rightSide.hobbiesAndInterests;
	
	
	return <>
		<div className={style['cv-wrap']}>

			{error &&<ErrorMassage /> }
			
			<div className={style['skills-block']}>
				<div className={style['about-me']}>
					<h2>{data.resume.leftSide.aboutMe.title}</h2>
					<p>{data.resume.leftSide.aboutMe.text}</p>
				</div>
				<div className={style['skills']}>
					<h2>{data.resume.leftSide.hardSkills.title}</h2>
					<ul>
						{hardSK.map((elem, index) => (
							<li key={index}>{elem}</li>
						))}
					</ul>
				</div>
				<div className={style['skills']}>
					<h2>{data.resume.leftSide.softSkills.title}</h2>
					<ul>
						{softSK.map((elem, index) => (
							<li key={index}>{elem}</li>
						))}
					</ul>	
				</div>
				<div className={style['skills']}>
					<h2>{data.resume.leftSide.languages.title}</h2>
					<ul>
						{language.map((elem, index) => (
							<li key={index}>{elem.language}</li>
						))}
					</ul>	
				</div>

			</div>
			

			 <div className={style['personal-data-block']} >
				<h1>{data.resume.rightSide.headerData.surname}</h1>
				<h1>{data.resume.rightSide.headerData.name}</h1>
				<h2>{data.resume.rightSide.headerData.speciality}</h2>
				<div className={style['contact-data']}>
					
					{isLoading && contact.map((elem, index) => (
						<span key={index}>
							<img src={elem.imgSrc} alt={elem.alt} />	
							<a href={elem.link}>{elem.element}</a>
						</span>
						
					))}
					
					{!isLoading && <Spiner />}

				</div>
				<div className={style['work-experiences']}>
					<h3 className={style['experience']}>WORK EXPERIENCES</h3>

					<div className={style['works-block']} >
						<h3 className={style['name-of-job']}>{workExperiences[0]?.title}</h3>
						<div className={style['works-block-description']}>
							<span>
								<p>{workExperiences[0]?.roles[0].role}</p>
								<p>{workExperiences[0]?.roles[0].p}</p>
								<ul>
									{workExperiences[0]?.roles[0].responsibilities?.map((elem, index) => (
										<li key={index}>
											{elem}
										</li>
									))}
								</ul>
								<p>{workExperiences[0]?.roles[1].role}</p>
								<ul>
									{workExperiences[0]?.roles[1].responsibilities?.map((elem, index) => (
										<li key={index}>
											{elem}
										</li>
									))}
								</ul>
								<p>{workExperiences[0]?.roles[2].role}</p>
							</span>
						</div>
						{workExperiences[1] && (
							<h3 className={style['name-of-job']}>{workExperiences[1].title}</h3>
						)}
						<div className={style['works-block-description']}>
							<ul>
								{workExperiences[1]?.responsibilities.map((elem, index) => (
									<li key={index}>
										{elem}
									</li>
								))}
							</ul>
						</div>
						<h3 className={style['name-of-job']}>{workExperiences[2]?.title}</h3>
						<div className={style['works-block-description']}>

							<p>{workExperiences[2]?.p} </p>
							<ul>
								{workExperiences[2]?.responsibilities.map((elem, index) => (
									<li key={index}>
										{elem}
									</li>
								))}
							</ul>
						</div>
						<h3 className={style['name-of-job']}>Education and Training</h3>
						<div className={style['works-block-description']}>
							{education.map((elem, index) => (
								<p key={index}>
									{elem}
								</p>
							))}
						</div>
						<h3 className={style['name-of-job']}>Hobbies and Interests</h3>
						<div className={style['works-block-description']}>
							<p>{hobbi}</p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<Footer />
	</>;
}