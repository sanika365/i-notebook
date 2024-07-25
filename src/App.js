import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import { useState, useCallback } from "react";

const themes = {
  theme1: {
    primary: "theme1-primary",
    secondary: "theme1-secondary",
    background: "theme1-background",
    text: "theme1-text",
  },
  theme2: {
    primary: "theme2-primary",
    secondary: "theme2-secondary",
    background: "theme2-background",
    text: "theme2-text",
  },
  theme3: {
    primary: "theme3-primary",
    secondary: "theme3-secondary",
    background: "theme3-background",
    text: "theme3-text",
  },
};

function App() {
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState(themes.theme1);

  const showAlert = useCallback((message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }, []);


  const closeAlert = () => setAlert(null);

  const switchTheme = (newTheme) => {
    setTheme(themes[newTheme]);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar theme={theme} />
          <Alert alert={alert} onClose={closeAlert} />
          <div className='container mx-auto p-4'>
            <div className='flex space-x-4 mb-4'>
              <button
                onClick={() => switchTheme("theme1")}
                className='bg-theme1-primary text-white py-2 px-4 rounded'
              >
                Theme 1
              </button>
              <button
                onClick={() => switchTheme("theme2")}
                className='bg-theme2-primary text-white py-2 px-4 rounded'
              >
                Theme 2
              </button>
              <button
                onClick={() => switchTheme("theme3")}
                className='bg-theme3-primary text-white py-2 px-4 rounded'
              >
                Theme 3
              </button>
            </div>
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert} />} />
              <Route path='/about' element={<About showAlert={showAlert} />} />
              <Route path='/login' element={<Login showAlert={showAlert} />} />
              <Route
                path='/signup'
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
