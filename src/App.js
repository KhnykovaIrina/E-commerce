import ShoppingCartButton from './components/ShoppingCartButton';

function App() {
  return (
    <div>
      <ShoppingCartButton text='Add to Cart - $250' />
      <ShoppingCartButton text='Add to Cart - $250' disabled={true} />
      <ShoppingCartButton text='Add to Cart - $250' />
    </div>
  );
}

export default App;
