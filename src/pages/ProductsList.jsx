import styled from "styled-components";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilteringContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 15px;
    border-radius: 1em
`
const Option = styled.option``

const ProductsList = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Title>T-Shirts</Title>
          <FilteringContainer>

              <Filter>
                  <FilterText>Filter:</FilterText>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Black</Option>
                        <Option>Green</Option>
                    </Select>
              </Filter>

              <Filter>
                <FilterText>Sort:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
              </Filter>

          </FilteringContainer>
          <Products/>
          <Newsletter/>
          <Footer/>
      </Container>
  );
};

export default ProductsList;
