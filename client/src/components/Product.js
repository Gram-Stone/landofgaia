import { Link } from "react-router-dom";
import formatter from "../currencyFormatter";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="card-img" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2 className="product-name">{product.name}</h2>
        </Link>
        <div className="price">{formatter.format(product.price)}</div>
      </div>
    </div>
  );
}
