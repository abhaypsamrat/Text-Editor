import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <Header />
      <TextEditor setValue={setValue} />
      <div>{value}</div>
    </div>
  );
}

export default App;
