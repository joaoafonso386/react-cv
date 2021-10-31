import { useContext } from "react";
import { Header, Segment } from "semantic-ui-react";
import { ContextCV } from "../../data/CV-info";

const About = () => {
  const { about } = useContext(ContextCV);

  return (
    <div>
      <Header style={{ paddingBottom: "15px" }} dividing as="h2">
        {about.title}
      </Header>
      <Segment
        style={{ marginTop: "25px", fontSize: "1.2em", lineHeight: "1.5" }}
      >
        {about.content}
      </Segment>
    </div>
  );
};

export default About;
