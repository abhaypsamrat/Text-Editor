import React, { useState } from "react";
import RichTextEditor from "./components/RichTextEditor";
import './App.css'

// const config ={
//   buttons : ["bold", "italic", "underline", "link", "unlink", "source"]
// }

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <h2>Text Editor For Ful.io - Frontend Intern</h2>
      <RichTextEditor setValue={setValue} />
      <div>{value}</div>
    </div>
  );
}

export default App;
