import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import MainLayout from "./layout/MainLayout";

export const CartContext = createContext();
export const ThemeContext = createContext();
function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("winter");
  function PrivateRoute({ isAuth, children }) {
    if (!isAuth) {
      navigate("/login");
    }
    return children;
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else {
      if (!(
          location.pathname === "/" ||
          location.pathname.includes('register')||
          location.pathname.includes('about') ||
          location.pathname.includes('products')||
          location.pathname.includes('cart')
        )
      ) {
        navigate("/login");
      }
    }
  }, [navigate]);

  useEffect(()=>{
    let storage = []
    if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  },[])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home></Home>
              </MainLayout>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <MainLayout>
                <About></About>
              </MainLayout>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <MainLayout>
                <Products></Products>
              </MainLayout>
            }
          ></Route>
          <Route
            path="/products/:id"
            element={
              <MainLayout>
                <Details></Details>
              </MainLayout>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <MainLayout>
                <Cart></Cart>
              </MainLayout>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/checkout"
            element={
              <PrivateRoute isAuth={!!token}>
                <MainLayout>
                  <Checkout></Checkout>
                </MainLayout>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <PrivateRoute isAuth={!!token}>
                <MainLayout>
                  <Orders></Orders>
                </MainLayout>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
