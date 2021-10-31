import { useContext } from "react";
import { ContextCV } from "../../data/CV-info";

import "./Header.css";
import { Image, Card, Segment } from "semantic-ui-react";
import me from "../../assets/me.jpg";

const HeaderC = () => {
  const { name, birthDate, email, shortBio, number } =
    useContext(ContextCV).header;

  return (
    <Card.Group>
      <Card className="header-content" color="blue" fluid header={name}>
        <Image style={{ width: "300px" }} src={me} />
        <div>
          <Segment as="h3">{shortBio}</Segment>
          <Segment>My email: {email}</Segment>
          <Segment>My number: {number}</Segment>
          <Segment>I was born in: {birthDate}</Segment>
        </div>
      </Card>
    </Card.Group>
  );
};

export default HeaderC;
