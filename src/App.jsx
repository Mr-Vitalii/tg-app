import { useEffect } from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


import { useTelegram } from "../hooks/useTelegram";


import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home/Home";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { FormPage } from "./pages/FormPage/FormPage";





function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <>
      <Router>
        <Routes>
          <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
          />
          <Route path="/product" element={
            <Layout>
               <ProductsPage/>
            </Layout>} />
            <Route path="/form" element={
            <Layout>
               <FormPage/>
            </Layout>} />
          <Route path="/next" element={
            <Layout>
            <span>Other page</span>
            </Layout>} />
          <Route  path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
