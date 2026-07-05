import "./App.css"
import { Routes, Route } from "react-router"
import CommentsPage from "./pages/CommentsPage"
import ImagesPage from "./pages/ImagesPage"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CommentsPage />} />
        <Route path="/imagens" element={<ImagesPage />} />
      </Routes>
    </>
  );
}

export default App;