import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Header from "./containers/Header";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" Component={ProductDetails} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
