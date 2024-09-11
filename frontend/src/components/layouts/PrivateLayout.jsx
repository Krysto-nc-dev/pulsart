import React from "react";

const PrivateLayout = ({ children }) => {
  return (
    <div className="private-layout">
      <header>
        <h1>Private Area</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 PulsArt</p>
      </footer>
    </div>
  );
};

export default PrivateLayout;
