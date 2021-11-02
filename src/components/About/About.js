import { useContext } from "react";
import { Header, Segment } from "semantic-ui-react";
import { ContextCV } from "../../data/CV-info";

import "./About.css";

const About = () => {
  const { about } = useContext(ContextCV);

  return (
    <div>
      <Header className="about-title" dividing as="h2">
        {about.title}
      </Header>
      <Segment className="about-content">{about.content}</Segment>
    </div>
  );
};

export default About;
