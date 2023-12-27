import Banner from '../../components/Banner/Banner';

import Footer from '../../layout/Footer/Footer';
import styles from './Home.module.scss';
import History from '../../components/History/History';

export  function Home() {
	
	return (
		<>
			<div className={styles['wrap']}>
				<Banner />
				<History />
				<Footer/>
				
			</div>
			
		</>
	);
}
