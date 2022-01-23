import styled from "styled-components";
import { Send } from '@material-ui/icons'
import { mobile } from "../../responsive";

const Container = styled.div`
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 65px;
    margin: 15px 0;
`
const Description = styled.p`
    font-size:24px;
    font-weight: 300;
    margin: 15px 0;
    ${mobile({textAlign: "center"})}
`

const InputContainer = styled.div`
    width: 40%;
    height: 45px;
    background-color: #FFF;
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    border-radius: 1em
`

const Input = styled.input`
    border: none;
    flex:8;
    padding-left: 25px;
    border-radius: 1em 0 0 1em;
`

const Button = styled.button`
    border: none;
    height: 100%;
    flex: 1;
    background-color: teal;
    color: #FFF;
    border-radius: 0 1em 1em 0;
`

const Newsletter = () => {
  return (
      <Container>
          <Title>Newsletter</Title>
          <Description>Get realtime updates on new arrivals and sales!</Description>
          <InputContainer>
            <Input placeholder="Email Address"/>
            <Button>
                <Send/>
            </Button>
          </InputContainer>
      </Container>
  );
};

export default Newsletter;
