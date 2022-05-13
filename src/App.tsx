// NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import AdminCategories from "pages/AdminCategories";
import AdminProducts from "pages/AdminProducts";
import Home from "pages/Home";
import Menu from "pages/Menu";
import Product from "pages/Product";
import Products from "pages/Products";
import { ItemsProvider } from "state/ItemsContext";
import { ModalProvider } from "state/ModalContext";
import "styles/style.sass";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <ItemsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:categoryId" element={<Products />} />
              <Route path="/menu/:catId/:productId" element={<Product />} />
              <Route path="/admin" element={<AdminCategories />} />
              <Route path="/admin/:categoryId" element={<AdminProducts />} />
            </Routes>
          </BrowserRouter>
        </ItemsProvider>
      </ModalProvider>
    </div>
  );
}
