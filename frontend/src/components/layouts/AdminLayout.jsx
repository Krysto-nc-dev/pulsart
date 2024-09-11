import React from "react";
import Topbar from "../global/Topbar";

const AdminLayout = ({ children }) => {
  return (
    <main className="admin-layout">
      <Topbar />
      {children}
    </main>
  );
};

export default AdminLayout;
