import Footer from '../../layout/Footer/Footer';
import styles from './Services.module.scss';

export default function Services() {
	return <>
		<div className={styles['my-services-wrap']}>
			<h4>My Services</h4>
			<div className={styles['my-services']}>
				<div className={styles['my-service-block']}>
					<div className={styles['my-service-content']} >
						<h5>Web Development</h5>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Delectus esse commodi deserunt vitae, vero quasi! 
						Veniam quaerat tenetur pariatur doloribus.
						</p>
						<a href='http://localhost:5173/contact' >ORDER NOW<span>{' >'}</span></a>
					</div>
				</div>
				<div className={styles['my-service-block']}>
					<div className={styles['my-service-content']} >
						<h5>Web Development</h5>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Delectus esse commodi deserunt vitae, vero quasi! 
						Veniam quaerat tenetur pariatur doloribus.
						</p>
						<a href='http://localhost:5173/contact' >ORDER NOW<span>{' >'}</span></a>
					</div>
				</div>
				<div className={styles['my-service-block']}>
					<div className={styles['my-service-content']} >
						<h5>Web Development</h5>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Delectus esse commodi deserunt vitae, vero quasi! 
						Veniam quaerat tenetur pariatur doloribus.
						</p>
						<a href='http://localhost:5173/contact' >ORDER NOW<span>{' >'}</span></a>
					</div>
				</div>
				<div className={styles['my-service-block']}>
					<div className={styles['my-service-content']} >
						<h5>Web Development</h5>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Delectus esse commodi deserunt vitae, vero quasi! 
						Veniam quaerat tenetur pariatur doloribus.
						</p>
						<a href='http://localhost:5173/contact'  >ORDER NOW<span>{' >'}</span></a>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</>;
}