import Footer from '../../layout/Footer/Footer';
import style from './Resume.module.scss';


export function Resume() {
	return <>
		<div className={style['cv-wrap']}>
			<div className={style['skills-block']}>
				<div className={style['about-me']}>
					<h2>ABOUT ME</h2>
					<p>
						I'm looking for a job where I
						can apply the acquired knowledge 
						and practical experience on large and 
						interesting projects, and also continue to 
						learn and develop myself.
						Currently, I have experience implementing 
						complex web applications and 
						internal frameworks using React , Node JS .
					</p>
				</div>
				<div className={style['skills']}>
					<h2>HARD SKILLS</h2>
					<ul>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Redux / Redux - Saga</li>
						<li>Next.js</li>
						<li>Styled components</li>
						<li>HTML5</li>
						<li>CSS3 / SASS</li>
						<li>WebPack / Gulp</li>
						<li>GIT</li>
						<li>Node js</li>
						<li>Figma</li>
					</ul>
				</div>
				<div className={style['skills']}>
					<h2>SOFT SKILLS</h2>
					<ul>
						<li>Communication</li>
						<li>Critical thinking</li>
						<li>Adaptability</li>
						<li>Collaboration</li>
						<li>Emotional intelligence</li>
					</ul>	
				</div>
				<div className={style['skills']}>
					<h2>LANGUAGES</h2>
					<ul>
						<li>English: Intermediate</li>
						<li>Ukrainian: Native</li>
						<li>Russian: Mastery</li>
					</ul>	
				</div>

			</div>
			<div className={style['personal-data-block']} >
				<h1>Yakovenko</h1>
				<h1>Semen</h1>
				<h2>FRONT-END DEVELOPER</h2>
				<div className={style['contact-data']}>
					<span>
						<img src='../../public/telephone.png' alt='telephone' />	
						<a href='+780771142653'>+78 (077) 114 26 53</a>
					</span>
					<span>
						<img src='../../public/gmail.svg' alt='gmail' />
						<a href='sam0925g@gmail.com' >sam0925g@gmail.com</a>
					</span>
					<span>
						<img src='../../public/telegram.svg' alt='telegram' />
						<a href='@the_bear0_0'>@the_bear0_0</a>
					</span>
					<span>
						<img src='../../public/linkedin.png' alt='linkedin' />
						<a href='https://www.linkedin.com/in/semen-yakovenko-585941186/'>semen-yakovenko</a>
					</span>
					<span>
						<img src='../../public/git.png' alt='git' />
						<a href='Simon0925'>Simon0925</a>
					</span>
					
				</div>
				<div className={style['work-experiences']}>
					<h3 className={style['experience']}>WORK EXPERIENCES</h3>

					<div className={style['works-block']} >
						<h3 className={style['name-of-job']}>2022 to 2023 - Freelancing via Young Ones Amsterdam:</h3>
						<div className={style['works-block-description']}>
							<p>
								<p>-Bartender - Panama Club, Amsterdam:</p>
							Maintaining high standards of service and health & safety and helping to deliver best service to customers.
								<ul>
									<li>
									All aspects of customer service.
									</li>
									<li>
								Mixing drinks, taking orders and ensuring customers are served quickly.
									</li>
									<li>
								Running the bar in line with health, safety and legal regulations.
									</li>
								</ul>
							-Waiter – DeVerbroederlJ / Cafe Restaurant Stork, Amsterdam
								<ul>
									<li>
									Greeting customers on arrival and taking food and drink orders
									</li>
									<li>
									Swiftly resolving any conflicts or issues 
									</li>
									<li>
									Working as part of a team
									</li>
									<li>
									Handling hot food and serving to the customers 
									</li>
								</ul>
								Store Consultant - G-Star Store
							</p>
						</div>
						<h3 className={style['name-of-job']}>2021 to 2022 - Freight Broker at Land Star Ukraine</h3>
						<div className={style['works-block-description']}>
							<ul>
								<li>
								Managing freight bookings using a computerised system. 
								</li>
								<li>
								Checking that tax and customs documents are correct and completed in full
								</li>
								<li>
								Working with national and international suppliers and agents. 
								</li>
								<li>
								Arranging freight deliveries and collections between ports, airports, and warehouses. 
								</li>
								<li>
								Handling invoices and payments. 
								</li>
								<li>
								Keeping clients up to date and deal with problems or delays.
								</li>
							</ul>
						</div>
						<h3 className={style['name-of-job']}>2020 to 2021 - Digital Marketing - Ukraine</h3>
						<div className={style['works-block-description']}>

							<p>Taking a lead in maintaining and developing a site. </p>
							<ul>
								<li>
							Attending meetings with clients to plan and develop website styles and appearance. 
								</li>
								<li>
							Using content management systems (CMS). 
								</li>
								<li>
							Analysing statistics about who is using the website and writing reports for managers and clients
								</li>
								<li>
							Reporting technical problems to IT support staff as needed
								</li>
							</ul>
						</div>
						<h3 className={style['name-of-job']}>Education and Training</h3>
						<div className={style['works-block-description']}>
							<p>2020 - Kharkiv National Automobile and Highway University Degree.</p>
							<p>2019 – Currently undertaking an online Front End Development Programme with A-Level Ukraine</p>
							<p>2013 - Vovchansk Gymnasium Ukraine No.1 General Secondary Level of Education.</p>
						</div>
						<h3 className={style['name-of-job']}>Hobbies and Interests</h3>
						<div className={style['works-block-description']}>
							<p>Fishing, Learning English (improving communication skills), kickboxing, hiking, football, volleyball.</p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<Footer />
	</>;
}