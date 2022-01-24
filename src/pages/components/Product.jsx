import styled from "styled-components";
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom";

const Details = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-color: rgba(0,0,0,.3);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out;
`

const Container = styled.div`
    background-color: #f5fbfd;
    border-radius: 1em;
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:hover ${Details}{
        opacity:1;
    }
`
const Circle = styled.div`
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background-color: #FFF;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 45px;
    height: 45px;
    cursor: pointer;
    background-color: #FFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    transition: all .1s ease-in-out;
    &:hover{
        background-color: #E9F59F;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
      <Container>
          <Circle/>
          <Image src={item.img}/>
          <Details>
              <Icon>
                <Link to="/cart"><ShoppingCartOutlined /></Link>
              </Icon>

              <Icon>
                  <Link to="/product"><SearchOutlined /></Link>
              </Icon>

              <Icon>
                  <FavoriteBorderOutlined />
              </Icon>
          </Details>
      </Container>
  );
};

export default Product;
