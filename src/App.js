// import logo from './logo.svg';
// import './App.css';
import { Container } from "./App.styled";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { UserList } from "./components/UserList/UserList";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Hero />
      <UserList />
    </>
  );
}

export default App;
