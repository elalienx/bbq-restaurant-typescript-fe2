// NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import "styles/style.sass";
import { ItemsProvider } from "state/ItemsContext";
import { ModalProvider } from "state/ModalContext";
import Home from "pages/Home";
import AdminCategories from "pages/AdminCategories";
import AdminProducts from "pages/AdminProducts";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <ItemsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminCategories />} />
              <Route path="/admin/:categoryId" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ItemsProvider>
      </ModalProvider>
    </div>
  );
}
