import { useContext } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { ContextCV } from "../../data/CV-info";

const About = () => {
  const { about } = useContext(ContextCV);

  return (
    <div>
      <Container fluid>
        <Header dividing as="h2">
          {about.title}
        </Header>
        <Segment>{about.content}</Segment>
      </Container>
    </div>
  );
};

export default About;
