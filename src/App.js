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
          <img src= {product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product. description}</p>
        </div>
        ))}
      </div>
        </main>
    </div>
  );
}

export default App;
