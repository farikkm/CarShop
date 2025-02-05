import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/post/:id" element={<Post />}/>
            </Routes>
        </BrowserRouter>
    )
}