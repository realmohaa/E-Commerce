import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FFF7F7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "15px"}; 
    right: ${props => props.direction === "right" && "15px"}; 
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 90%
    padding-left: 10%;
`

const DetailsContainer = styled.div`
    flex: 2;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 1em;
    background-color: transparent;
    transition: .2s all ease-in-out;

    &:hover{
        padding: 18px;
        font-weight: 700;
        font-size: 14px;
    }
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  return (
    <Container>

        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowBackIosOutlined/>
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>

                <DetailsContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button>SHOP NOW</Button>
                </DetailsContainer>
            </Slide>
            ))}
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowForwardIosOutlined/>
        </Arrow>

    </Container>
  );
};

export default Slider;
