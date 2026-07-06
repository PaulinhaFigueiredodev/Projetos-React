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
				<Route path="/" element={<CommentsView />} />
				<Route path="/imagens" element={<ImagesView />} />
			</Routes>
		</>
	);
}

export default App;