import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';
import { mobile } from '../../responsive' 
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
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
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width:"15px"})}
`

const Center = styled.div`
    flex:1;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "22px"})}
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex:2})}
`

const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
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
          <Logo>KAVANI</Logo>
          </Center>

          <Right>
            <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
            <Link to="/login"><MenuItem>LOG IN</MenuItem></Link>
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
            </Link>
          </Right>
      </Wrapper>
  </Container>
  )
}

export default Navbar;
