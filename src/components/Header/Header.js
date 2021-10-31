import { useContext } from "react";
import { ContextCV } from "../../data/CV-info";

import "./Header.css";
import { Image, Card, Segment, Header } from "semantic-ui-react";
import me from "../../assets/me.jpg";

const HeaderC = () => {
  const { name, birthDate, email, shortBio, number } =
    useContext(ContextCV).header;

  return (
    <Card.Group>
      <Card className="header-content" color="blue" fluid header={name}>
        <Image style={{ width: "300px" }} src={me} />
        <div style={{ width: "100%" }}>
          <Header color="blue" as="h1">
            {shortBio}
          </Header>
          <Segment raised color="blue">
            My email: {email}
          </Segment>
          <Segment raised color="blue">
            My number: {number}
          </Segment>
          <Segment raised color="blue">
            I was born in: {birthDate}
          </Segment>
        </div>
      </Card>
    </Card.Group>
  );
};

export default HeaderC;
