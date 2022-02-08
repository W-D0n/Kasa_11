import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Accomodations, Error } from '../pages';


function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="accomodations" element={<Accomodations />}>
						<Route path=":id" element={<Accomodations />} />
					</Route>
					<Route path="about" element={<About />} />
					<Route path="error" element={<Error />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;