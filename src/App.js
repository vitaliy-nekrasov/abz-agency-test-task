import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { UserList } from "./components/UserList/UserList";
import { PostForm } from "./components/PostForm/PostForm";
import { useState } from "react";

function App() {
  const [newUser, setNewUser] = useState(null);
  const getNewUser = (value) => {
    setNewUser(value);
  };

  return (
    <>
      <Header />
      <Hero />
      <UserList newUser={newUser} />
      <PostForm getNewUser={getNewUser} />
    </>
  );
}

export default App;
