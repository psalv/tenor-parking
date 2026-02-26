import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Message = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

function App() {
  return (
    <Container>
      <Message>Thank you, Tenor is no longer available.</Message>
    </Container>
  );
}

export default App;
