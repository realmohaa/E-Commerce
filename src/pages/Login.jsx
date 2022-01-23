import styled from "styled-components";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`
    width:100vw;
    height: 100vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    ${mobile({ height: "40vh" })}
`
const FormContainer = styled.div`
    width: 30%;
    ${mobile({ width: "80%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 12px 0;
`

const Button = styled.button`
    border: none;
    width: 100%;
    padding: 15px 20px;
`

const Link = styled.a`
    text-decoration: underline;
    margin: 5px 0;
    cursor: pointer;
    font-size: 14px;
`

const Login = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <FormContainer>
            <Title>LOGIN TO YOUR ACCOUNT</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                <Link>Forgot your password?</Link>
                <Link>Create a new account</Link>
            </Form>
            </FormContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  );
};

export default Login;
