import React from 'react';
import styled from 'styled-components';
import { MenuOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';
import { mobile, tablets } from '../../responsive' 
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "40px", padding:"4px 15px"})}
}`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "5px 0"})}
`

const Left = styled.div`
    flex:1;
    display: flex;  
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 1em;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 8px;
    ${mobile({display: "none"})}
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex:1;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    transition: .1s all ease-in-out;
    ${mobile({fontSize: "25px", justifyContent: "center"})};
    &:hover{
      transform: scale(1.12);
    }
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "flex-end"})}
`

const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-right: 25px;
    transition: .1s all ease-in-out;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
    ${tablets({display:"none"})};
    &:hover{
      transform: scale(1.12);
      color: teal
    }
`

const Bars = styled.div`
    display: none;
    ${tablets({display:"block"})};
`

const Navbar = ({toggle}) => {
  return (
  <Container>
      <Wrapper>

          <Left>
            <Language>EN</Language>

            <SearchContainer>
              <Input placeholder='Search'/>
              <Search style={{color: "gray", fontSize:16}}/>
            </SearchContainer>

          </Left>

          <Center>
          <Link to="/"><Logo>KAVANI</Logo></Link>
          </Center>

          <Right>
            <MenuItem><Link to="/register">REGISTER</Link></MenuItem>
            <MenuItem><Link to="/login">LOG IN</Link></MenuItem>
            <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </Link>
            </MenuItem>
            <Bars onClick={toggle}><MenuOutlined/></Bars>
          </Right>
      </Wrapper>
  </Container>
  )
}

export default Navbar;
