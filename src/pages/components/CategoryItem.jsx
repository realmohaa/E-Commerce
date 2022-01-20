import styled from "styled-components";

const Container = styled.div`
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
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Details>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Details>
        </Container>
    );
};

export default CategoryItem;
