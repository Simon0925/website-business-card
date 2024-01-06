import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import style from './RightSide.module.scss';


export default function RightSide(){
	return (
		<>
			<div className={style['right-side-wrap']}>
				
				<HeaderMenu />
				<Header />
				<Main />
			</div>
		</>
	);
}