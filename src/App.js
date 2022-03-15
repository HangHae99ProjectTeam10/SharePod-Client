import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./routes/Main";
import Regist from "./routes/Regist";
import Write from "./routes/Write";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/write" element={<Write />} />
          <Route path="/board" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
