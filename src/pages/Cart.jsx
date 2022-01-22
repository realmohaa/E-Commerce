import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Announcement from './components/Announcement';
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px 0;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 1em;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const CartItems = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
  border-radius: 1em;
  margin: 10px 0;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
`

const Hr = styled.hr`
  width: 90%;
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 1em;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>MY BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <CartItems>
            <Product>
              <ProductDetail>
                <Image src="https://www.kindpng.com/picc/m/143-1431115_jordans-png-transparent-png.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Jordan Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 53453453
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> 44
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>250 AED</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/61NjUI+psaL.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Armani - Stronger With You Perfume
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 4345433
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>300 AED</ProductPrice>
              </PriceDetail>
            </Product>
          </CartItems>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>550 AED</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Fees</SummaryItemText>
              <SummaryItemPrice>10 AED</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>25 AED</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>535 AED</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer />
    </Container>
  );
};

export default Cart;
