import './App.css';
import {InfoBar} from './layout/InfoBar/InfoBar';
import { Header } from './layout/Header/Header';
import { Main } from './layout/Main/Main';
import { BrowserRouter } from 'react-router-dom';



function App() {
	return (
		<>
			
			<InfoBar />
			<Header />
			<Main />
			<div id="modal-root"></div>			
		</>
	);
}

export default App;
