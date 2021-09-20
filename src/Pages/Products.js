import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/actions/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <div>
      <main className="products">
        <ul>
          {Products.map((product) => (
            <li key={product.id}>
              <div>
                <p>
                  <strong>{product.title}</strong>
                  {product.desc}
                </p>
                {product.price} $
              </div>
              <div>
                <button onClick={() => dispatch(addProduct(product))}>
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
export default Products;
