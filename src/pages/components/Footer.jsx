import { Instagram, Twitter, YouTube, Room, Phone, MailOutline } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 25px;
`
const Logo = styled.h1``

const Description = styled.p`
    margin: 25px 0;
`

const MediaContainer = styled.div`
    display: flex;
`

const MediaIcon = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    color: #FFF;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`

const Center = styled.div`
    flex: 1;
    padding: 25px;
    ${mobile({display: "none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 8px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fcf5f5"})}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
    width: 40%;
`

const Footer = () => {
  return (
      <Container>
        <Left>
              <Logo>KAVANI.</Logo>
                <Description>Kavani brings together an increasing number of globally recognized brands,
                    When you buy online in Dubai, you can remain at the forefront of the season's latest
                    trends with a large selection of fashion, footwear, accessories, and cosmetic goods,
                    as well as rapid delivery across the UAE.
                </Description>
                <MediaContainer>
                    <MediaIcon color="E4405F">
                        <Instagram/>
                    </MediaIcon>

                    <MediaIcon color="55ACEE">
                        <Twitter/>
                    </MediaIcon>

                    <MediaIcon color="E60023">
                        <YouTube/>
                    </MediaIcon>
                </MediaContainer>
        </Left>

        <Center>
              <Title>Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Orders</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Men's Wear</ListItem>
                  <ListItem>Women's Wear</ListItem>
                  <ListItem>Shoes</ListItem>
                  <ListItem>Perfumes</ListItem>
                  <ListItem>Watches</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>TCS</ListItem>
              </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> Dubai, United Arab Emirates
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +971 50 000 0000
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> support@kavani.ae
            </ContactItem>
            <ContactItem>
                <Payment src="https://vacalvers-store.com/wp-content/uploads/2021/10/payments-stripe.png" />.
            </ContactItem>
            </Right>
      </Container>
  );
};

export default Footer;
