import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripPlannerPage from './Views/TripPlannerPage';
import Restaurants from './Views/Restaurants';
import HomePage from './Views/HomePage';


const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/trip-planner' element={<TripPlannerPage />} />
					<Route path='/restaurants' element={<Restaurants />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
