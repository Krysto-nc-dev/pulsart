import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; // Assurez-vous que ce chemin est correct
import ScrollToTop from "./components/utils/ScrollToTop";
import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material"; // Correction de l'importation

const App = () => {
  const { theme, colorMode } = useMode(); // Utilisation de la déstructuration d'objet

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       
          <ScrollToTop />
         
            <div className="app">
              <Outlet />
            </div>
       
          <ToastContainer />
       
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
