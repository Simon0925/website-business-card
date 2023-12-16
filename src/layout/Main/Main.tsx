
import styles from './Main.module.scss';
import { Home } from '../../pages/Home/Home';
import { Contact } from '../../pages/Contact/Contact';
import {Resume} from '../../pages/Resume/Resume';
import { Error } from '../../pages/Error/Error'; 
import {Services} from '../../pages/Services/Services';
import {Works} from '../../pages/Works/Works';
import {  Routes, Route,  Outlet } from 'react-router-dom';





export function Main ()  {
	return(
		<>
			<main className={styles['main']}>
				
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/services" element={<Services />} />
					<Route path="/works" element={<Works />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Outlet />
			</main>
           
			
		</>
	);
}