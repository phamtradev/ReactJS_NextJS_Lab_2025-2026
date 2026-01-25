import "./ProductCard.css";
import productImg from "../../assets/react.svg";
const ProductCard = () => {
  return (
    <>
      <div className="product-card">
        <img src={productImg} alt="Product" className="product-image" />
        <h3 className="product-name">Product Name</h3>
        <p className="product-price">100VND</p>
        <button className="add-to-card">Add to cart</button>
      </div>
    </>
  );
};

export default ProductCard;
