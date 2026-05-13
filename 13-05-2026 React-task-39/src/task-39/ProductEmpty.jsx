const products = [];

function ProductEmpty() {
  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}
export default ProductEmpty