import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ExperienceEducation from "./components/Education & Experience/EducationExperience";
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
          <Skills />
          <ExperienceEducation />
        </Container>
      </div>
    </ContextCV.Provider>
  );
}

export default App;
