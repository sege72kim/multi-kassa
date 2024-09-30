import Header from "../sections/header/Header";
import "./App.css";
import "../stylesheet.css";
import OpeningBlock from "../sections/openingBLock/openingBlock";
import Calculator from "../sections/calculator/Calculator";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <OpeningBlock />
        <Calculator />
      </main>
    </div>
  );
}

export default App;
