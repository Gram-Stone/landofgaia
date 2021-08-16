import React from "react";
import { Link } from "react-router-dom";
import currencyFormatter from "../currencyFormatter";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div>
        <div>
          <img src={product.image} alt={product.name}></img>
        </div>
        <div>
          <ul>
            <li>{product.name}</li>
            <li>{currencyFormatter.format(product.price)}</li>
          </ul>
        </div>
        <div>
          <div className="card">
            <ul>
              <li>
                <div>
                  <div>Price</div>
                  <div className="price">
                    {currencyFormatter.format(product.price)}
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span>In Stock</span>
                    ) : (
                      <span>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
