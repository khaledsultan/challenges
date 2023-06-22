import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const  handleAddTag = (newTag) => {
    // console.log("[animals,newAnimal]",[animals,{id:uid(),...newAnimal}]);
    setTags([...tags,newTag]);
  }

  const DeleteTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));

  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag}/>
      <List tags={tags} onDeleteTag={DeleteTag}/>
    </main>
  );
}
