import Header from "./Header";
import Footer from "./Footer";
import React from "react";

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
