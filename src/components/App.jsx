import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const [items, setItem] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((pValue) => ({ ...pValue, [name]: value }));
  }

  function handleClick(event) {
    setItem((pItem) => {
      return [...pItem, input];
    });
    setInput({ title: "", content: "" });
    event.preventDefault();
  }

  function handleDelete(id) {
    setItem((pValue) => {
      return pValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={handleClick} onChange={handleChange} value={input} />
      {items.map((item, i) => (
        <Note
          onCheck={handleDelete}
          key={i}
          id={i}
          title={item.title}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
