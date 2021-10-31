import { useContext } from "react";
import { Card, Grid, Header } from "semantic-ui-react";
import { ContextCV } from "../../data/CV-info";

const ExperienceEducation = () => {
  const { experience, education } = useContext(ContextCV);

  //map experience
  const uiExperience = experience.map((job) => {
    return (
      <Card>
        <Card.Content header={job.company} />
        <Card.Content description={job.description} />
        <Card.Content extra>{job.jobCategory}</Card.Content>
      </Card>
    );
  });

  //map education
  const uiEducation = education.map((degree) => {
    return (
      <Card>
        <Card.Content header={degree.institution} />
        <Card.Content description={degree.description} />
        <Card.Content extra>{degree.degree}</Card.Content>
      </Card>
    );
  });

  return (
    <div>
      <Header
        style={{ paddingBottom: "15px", marginTop: "25px" }}
        dividing
        as="h2"
      >
        Experience & Education
      </Header>
      <Grid columns={2} padded>
        <Grid.Column>{uiExperience}</Grid.Column>
        <Grid.Column>{uiEducation}</Grid.Column>
      </Grid>
    </div>
  );
};

export default ExperienceEducation;
