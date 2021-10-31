import { useContext } from "react";
import { Image, Header, Segment } from "semantic-ui-react";
import me from "../../assets/me.jpg";
import { ContextCV } from "../../data/CV-info";

const HeaderC = () => {
  const { header } = useContext(ContextCV);

  return (
    <div>
      <Header as="h1" block>
        {header.name}
      </Header>
      <Image style={{ width: "300px" }} circular src={me} wrapped />
      <Segment>{header.shortBio}</Segment>
    </div>
  );
};

export default HeaderC;
