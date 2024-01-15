import './App.css';
import {InfoBar} from './layout/InfoBar/InfoBar';


import { BurgerContext } from './context/burger.context';
import { useState } from 'react';

import { DoteContext } from './context/dote.context';
import RightSide from './layout/RightSide/RightSide';


function App() {
	const [moveToLeft, setmoveToLeft] = useState(false);
	const [moveToRigth, setMoveToRigth] = useState(false);


	return (
		<>	
			<DoteContext.Provider value={{moveToRigth, setMoveToRigth}}>
				<BurgerContext.Provider value={{moveToLeft, setmoveToLeft}}>
					<InfoBar />	
					<RightSide />
				</BurgerContext.Provider>
			</DoteContext.Provider>
			<div id="modal-root"></div>
			
		</>
	);
}

export default App;
