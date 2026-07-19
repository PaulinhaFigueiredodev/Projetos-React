import "./App.css"
import { Routes, Route } from "react-router"
import Header from "./components/organisms/Header";
import CommentsView from "./views/CommentsView";
import ImagesView from "./views/ImagesView";
import NotFoundView from "./views/NotFoundView";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<ImagesView />} />
				<Route path="/comentarios" element={<CommentsView />} />
				<Route path="*" element={<NotFoundView />} />
			</Routes>
		</>
	);
}

export default App;
