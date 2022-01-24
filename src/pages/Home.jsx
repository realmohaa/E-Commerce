import Announcement from './components/Announcement';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Slider from './components/Slider';

const Home = () => {
  return (
  <div>
      <Announcement/>
      <Categories/>
      <Slider/>
      <Products/>
      <Newsletter/>
      <Footer/>
  </div>
  );
};

export default Home;
