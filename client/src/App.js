import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

//This is the higest level parent component
function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
    </div>
  );
}

export default App;
