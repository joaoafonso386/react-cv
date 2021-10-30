import { Container, Header } from "semantic-ui-react";
import { CV } from "../../data/CV-info";

const About = () => {
  const { about } = CV;

  return (
    <div>
      <Container fluid>
        <Header as="h2">{about.title}</Header>
        <p>{about.content}</p>
      </Container>
    </div>
  );
};

export default About;
