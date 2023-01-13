// import logo from './logo.svg';
// import './App.css';
import { Container } from "./App.styled";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Hero />
    </>
  );
}

export default App;
