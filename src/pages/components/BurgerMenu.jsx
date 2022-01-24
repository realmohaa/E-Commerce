import { Close } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.aside`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.95);
    display: grid;
    align-items:center;
    position: fixed;
    z-index:10;
    transition: all 0.3s ease-in-out;
    opacity: ${({isToggled}) => (isToggled ? '1' : '0')};
    top: ${({isToggled}) => (isToggled ? '0' : '-100%')};
`

const Icon = styled.div`
    position: absolute;
    font-size: 2rem;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    color: #FFF;
`

const Wrapper = styled.div``

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const MenuItem = styled.div`
    color: #FFF;
    font-size: 1.5rem;
    margin: 10px 0;
`

const BurgerMenu = ({isToggled, toggle}) => {
  return (
      <Container isToggled={isToggled} onClick={toggle}>
          <Icon onClick={toggle}><Close/></Icon>
          <Wrapper>
              <Menu>
                  <MenuItem><Link to="/" onClick={toggle}>Home</Link></MenuItem>
                  <MenuItem><Link to="/cart" onClick={toggle}>Cart</Link></MenuItem>
                  <MenuItem><Link to="/login" onClick={toggle}>Login</Link></MenuItem>
                  <MenuItem><Link to="/register" onClick={toggle}>Create Account</Link></MenuItem>
              </Menu>
          </Wrapper>
      </Container>
  );
};

export default BurgerMenu;
