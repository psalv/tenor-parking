import styled from "styled-components";
import { colors } from "./colors";
import { TextLink } from "./TextLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
`;

const Card = styled.div`
  background-color: ${colors.background.default.default};
  border-radius: 16px;
  padding: 32px;
  max-width: 640px;
`;

const Content = styled.main`
  text-align: left;
`;

const Title = styled.h1`
  font-family: "Gambetta", Georgia, serif;
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.text.brandPrimary.default};
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${colors.text.neutral.default};
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Closing = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${colors.text.neutral.default};
  margin-top: 32px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
  font-weight: 500;
`;

function App() {
  return (
    <Container>
      <Card>
        <Content>
        <Title>Tenor is no longer&nbsp;available</Title>
        <Paragraph>
          The Tenor platform closed operations and erased its servers on March&nbsp;1,&nbsp;2026.
        </Paragraph>
        <Paragraph>
          We started Tenor to support clinicians who work in an often isolating
          and emotionally demanding profession. We are proud of what we built
          and the community that formed around it.
        </Paragraph>
        <Paragraph>
          To continue building the best possible tools and resources for
          clinicians, our team has joined{" "}
          <TextLink href="https://growtherapy.com">Grow Therapy</TextLink>. We
          remain committed to the same mission of supporting clinicians with
          thoughtful, responsible technology. We believe we have only scratched
          the surface of what is possible.
        </Paragraph>
        <Closing>
          Thank you to everyone who was part of the Tenor journey.
        </Closing>
        </Content>
      </Card>
    </Container>
  );
}

export default App;
