import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen min-h-screen  min-w-full overflow-hidden bg-blue-100">
      <main className="pl-40 pt-16">{children}</main>
    </div>
  );
};

export default Layout;
