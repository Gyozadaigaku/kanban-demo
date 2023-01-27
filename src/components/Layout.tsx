import React from "react";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen min-h-screen  min-w-full overflow-hidden bg-blue-100">
      <TopBar />
      <main className="pl-40 pt-16">{children}</main>
    </div>
  );
};

export default Layout;
