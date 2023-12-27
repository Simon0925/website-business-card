import './App.css';
import {InfoBar} from './layout/InfoBar/InfoBar';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';

import { BurgerContext } from './context/burger.context';
import { useState } from 'react';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { DoteContext } from './context/dote.context';


function App() {
	const [moveToLeft, setmoveToLeft] = useState(false);
	const [moveToRigth, setMoveToRigth] = useState(false);


	return (
		<>	
			<DoteContext.Provider value={{moveToRigth, setMoveToRigth}}>
				<BurgerContext.Provider value={{moveToLeft, setmoveToLeft}}>
					<HeaderMenu />
					<InfoBar />	
					<Header />
					<Main />
				</BurgerContext.Provider>
			</DoteContext.Provider>
			<div id="modal-root"></div>
		</>
	);
}

export default App;
