import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import MessageBox from "../components/MessageBox";
import currencyFormatter from "../currencyFormatter";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <div></div>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
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
      )}
    </div>
  );
}
