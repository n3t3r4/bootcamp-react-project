import "./App.css";
import { AppBar } from "./components/AppBar";
import { Home } from "./routes/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NewNote } from "./routes/NewNote";
import { ViewNotePad } from "./routes/ViewNotePad";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/new" element={<NewNote />} />

        <Route path="/notepad/:id" element={<ViewNotePad />} />
      </Routes>
      <footer className="flex justify-center items-center py-2 text-sm bg-gray-300 shadow-2xl text-white">
        Projeto desenvolvido utilizando ReactJS
      </footer>
    </BrowserRouter>
  );
}

export default App;
