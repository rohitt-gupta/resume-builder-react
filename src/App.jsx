import "./App.css";
import Resume from "./components/Resume";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Resume />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
