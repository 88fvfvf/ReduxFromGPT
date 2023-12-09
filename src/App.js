import React from "react";
import Input from "./components/Advanced/Input";
import Project from "./components/Beginer/Project";
import GetPostsSlice from "./components/getPosts/GetPostSlice";

function App() {
  return (
    <div className="App">
      <Project/>
      <h2>Advanced</h2>
      <Input/>
      <h2>GetPosts</h2>
      <GetPostsSlice/>
    </div>
  );
}

export default App;
