import Header from "./components/Header/Header";
import About from "./components/About/About";
import { Container } from "semantic-ui-react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <About />
      </Container>
    </div>
  );
}

export default App;
