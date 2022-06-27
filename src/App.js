import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  Library,
  Collab,
  News,
  About,
  Updates,
  Dashboard,
} from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
        <Header />
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/collab" element={<Collab />} />
            <Route path="/ai-news" element={<News />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
