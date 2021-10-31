import { useContext } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import { ContextCV } from "../../data/CV-info";

const Skills = () => {
  const { skills } = useContext(ContextCV);

  const uiSkills = skills.map((skill) => {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <h4>{skill.title}</h4>
              <p>{skill.content}</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  });

  return (
    <div>
      <Header
        style={{ paddingBottom: "15px", marginTop: "25px" }}
        dividing
        as="h2"
      >
        My skills
      </Header>
      {uiSkills}
    </div>
  );
};

export default Skills;
