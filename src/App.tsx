import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ChampionDetails } from './components/ChampionDetails';
import { Champions } from './components/Champions';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Champions />} />
			<Route path="/:champName" element={<ChampionDetails />} />
		</Routes>
	);
}

export default App;
