import data from "./data";

function App() {
  return (
    <div >
    <header>
    <a href="/" >amazona</a>
    </header> 
      <main>
        <h1>Featured Products</h1>
        List Product of  Bomi's Webb Shop

        {/* // uique props key need  ex.  <div key = {product.slug}>  */}

      <div className ="products">
      {data.products.map((product) => (
        <div className="product" key = {product.slug}> 
          <a href={`/product/${product.slug}`} >
          <img src= {product.image} alt={product.name} />
          </a>
        <div className="product-info">
        <a href={`/product/${product.slug}`} >
          <p>{product.name}</p>
          <p>{product.nameB}</p>
        </a>
          <p><strong>{product.price}</strong></p>
          <p>{product. description}</p>
          <button>Add to cart</button>
        </div>
        </div>
        ))}
      </div>
        </main>
    </div>
  );
}

export default App;
