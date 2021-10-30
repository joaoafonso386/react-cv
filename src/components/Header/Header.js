import { Card, Icon, Image } from "semantic-ui-react";
import { CV } from "../../data/CV-info.js";
import me from "../../assets/me.jpg";

const Header = () => {
  const { header } = CV;

  return (
    <Card style={{ margin: "30px 0", width: "500px" }}>
      <Image src={me} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{header.name}</Card.Header>
        <Card.Meta>
          <span className="date">{header.contact}</span>
        </Card.Meta>
        <Card.Description>{header.shortBio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="birthday" />
          {header.birthDate}
        </a>
      </Card.Content>
    </Card>
  );
};

export default Header;
