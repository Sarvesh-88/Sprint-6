import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.thumbnail} alt={product.title} />

      <div className="details">
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <div className="price">${product.price}</div>

        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;