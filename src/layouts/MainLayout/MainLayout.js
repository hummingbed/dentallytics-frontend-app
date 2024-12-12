import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./MainLayout.styles.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;