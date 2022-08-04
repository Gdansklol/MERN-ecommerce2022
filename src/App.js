import data from "./data";

function App() {
  return (
    <div >
    <header>
    <a href="/" >amazona</a>
    </header> 
      <main>
        <h1>Featured Products</h1>
        List Product 
        {data.products.map((product) => (
        <div>
          <img src= {product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
        ))}
        </main>
    
    </div>
  );
}

export default App;
