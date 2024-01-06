import Footer from '../../layout/Footer/Footer';
import style from './Portfolio.module.scss';


export  function Portfolio() {
	return <>
		<div className={style['portfolio-page']}>
			<h4 >Portfolio</h4>
			<div className={style['portfolio-wrap']}>

				<div className={style['portfolio-container']}>
				
					<div className={style['portfolio-ditails']}>
						<h5>Content will be soon</h5>
						<p>Content will be soon</p>
						<a href='http://localhost:5173/portfolio'  >READ NOW<span>{' >'}</span></a>
					</div>
				</div>
				<div className={style['portfolio-container']}>
					<div className={style['portfolio-ditails']}>
						<h5>Content will be soon</h5>
						<p>Content will be soon</p>
						<a href='http://localhost:5173/portfolio'  >READ NOW<span>{' >'}</span></a>
					</div>
				</div>
				<div className={style['portfolio-container']}>
					<div className={style['portfolio-ditails']}>
						<h5>Content will be soon</h5>
						<p>Content will be soon</p>
						<a href='http://localhost:5173/portfolio'  >READ NOW<span>{' >'}</span></a>
					</div>
				</div>
				<div className={style['portfolio-container']}>
					<div className={style['portfolio-ditails']}>
						<h5>Content will be soon</h5>
						<p>Content will be soon</p>
						<a href='http://localhost:5173/portfolio'  >READ NOW<span>{' >'}</span></a>
					</div>
				</div>

			</div>
		</div>
		<Footer />
	</>;
}