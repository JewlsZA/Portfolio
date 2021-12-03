import "./product.css"

// Renders a coding project product card
const Product = ({ img, link, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <p className="p-name">{name}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="image" className="p-img" />
      </a>
    </div>
  )
}

export default Product
