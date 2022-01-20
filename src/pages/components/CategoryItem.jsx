import styled from "styled-components";
import { useSpring, animated } from 'react-spring'

const Container = styled(animated.div)`
  flex: 1;
  margin:6px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:1em;
`
const Details = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: #FFF;
    margin-bottom: 25px;
`
const Button = styled.button`
    border: none;
    border-radius: 1em;
    padding: 10px;
    background-color: #FFF;
    font-weight: 600;
    cursor: pointer;
    transition: .2s all ease-in-out;
    &:hover {
        padding: 15px;
        font-size: 15px
    }
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1]
const trans = (x, y, s) => `perspective(100vw) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const CategoryItem = ({item}) => {
    const [props, set] = useSpring(() => ({ xys: [0,0,1]}));
    return (
        <Container 
        onMouseMove={({clientX: x, clientY: y}) => (set({xys:calc(x,y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{transform: props.xys.to(trans)}}>
            <Image src={item.img}/>
            <Details>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Details>
        </Container>
    );
};

export default CategoryItem;
