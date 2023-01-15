import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { UserList } from "./components/UserList/UserList";
import { PostForm } from "./components/PostForm/PostForm";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UserList />
      <PostForm />
    </>
  );
}

export default App;
