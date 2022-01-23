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
`
const FormContainer = styled.div`
    width: 40%;
    ${mobile({ width: "80%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 15px 10px 0 0;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 15px 0;
`

const Button = styled.button`
    border: none;
    width: 40%;
    padding: 15px 20px;
`

const Register = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <FormContainer>
                    <Title>CREATE YOUR ACCOUNT</Title>
                    <Form>
                        <Input placeholder="First Name"/>
                        <Input placeholder="Last Name"/>
                        <Input placeholder="Username"/>
                        <Input placeholder="Email Address"/>
                        <Input placeholder="Password"/>
                        <Input placeholder="Confirm Password"/>
                        <Agreement>By creating an account, I agree to the processing of my data as per <b>PIVACY POLICY</b></Agreement>
                        <Button>Create Account</Button>
                    </Form>
                </FormContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Register;
