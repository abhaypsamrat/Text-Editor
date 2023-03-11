import React, { useState } from "react";
import RichTextEditor from "./components/RichTextEditor";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <Header />
      <RichTextEditor setValue={setValue} />
      <div>{value}</div>
    </div>
  );
}

export default App;
