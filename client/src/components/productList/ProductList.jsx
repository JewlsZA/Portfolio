import Product from "../product/Product"
import "./productList.css"
import { products } from "../../data"

// This component maps out a product component for every item in data.js array
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Coding Projects</h1>
        <p className="pl-desc">
          Here you can find some of my most recent projects. Clicking them will
          take you to their respective GitHub repositories. If you would like to
          know what they were built for, please read the README files.
          Alternatively, you can visit my projects section at ultrix.org/code to
          read through a summary of each project.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            name={item.name}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
