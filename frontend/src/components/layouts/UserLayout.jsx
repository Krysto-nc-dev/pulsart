import React from "react";

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <header>
        <h1>User Area</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>User Panel © 2024 PulsArt</p>
      </footer>
    </div>
  );
};

export default UserLayout;
