import AdminHome from "./pages/AdminHome/Dashboard/AdminHome";
import User from "./pages/AdminHome/User/ViewUser";
import Product from "./pages/AdminHome/Products/ViewProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<AdminHome />} />
            <Route path="users">
              <Route index element={<User />} />
              <Route path=":userId" />
            </Route>
            <Route path="products">
              <Route index element={<Product />} />
              <Route path=":productId" />
            </Route>
          </Route>
          <Route path="/adminHome">
            <Route index element={<AdminHome />} />
            <Route path="users">
              <Route index element={<User />} />
              <Route path=":userId" />
            </Route>
            <Route path="products">
              <Route index element={<Product />} />
              <Route path=":productId" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
