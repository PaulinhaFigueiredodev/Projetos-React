import "./App.css"
import { Routes, Route } from "react-router"
import Header from "./components/organisms/Header";
import CommentsView from "./views/CommentsView";
import ImagesView from "./views/ImagesView";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<ImagesView />} />
				<Route path="/comentarios" element={<CommentsView />} />
			</Routes>
		</>
	);
}

export default App;