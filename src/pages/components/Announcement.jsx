import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({marginBottom: "6px"})}
`

const Announcement = () => {
  return (
      <Container>
          20% Sale for new users!
      </Container>
  );
};

export default Announcement;
