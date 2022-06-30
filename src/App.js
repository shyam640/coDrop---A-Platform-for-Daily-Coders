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
  BottomNav
} from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col overflow-hidden">
        <Header />
        <div className="flex justify-center items-center">
          <BottomNav/>
        </div>
        <main className="mt-16 lg:mt-24 mb-10 p-2 sm:p-4">
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
