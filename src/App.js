import Header from "./components/Header/Header";
import About from "./components/About/About";
import { ContextCV, CV } from "./data/CV-info";

import { Container } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <ContextCV.Provider value={CV}>
      <div className="App">
        <Container>
          <Header />
          <About />
        </Container>
      </div>
    </ContextCV.Provider>
  );
}

export default App;
