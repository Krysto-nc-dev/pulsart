import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";


import HomeScreen from "./screens/site/HomeScreen";
import LoginScreen from "./screens/site/LoginScreen";
import NotFoundScreen from "./screens/site/NotFoundScreen";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import AdminRoutes from "./components/utils/AdminRoutes";
import UserRoutes from "./components/utils/UserRoutes";
import AdminHome from "./screens/admin/AdminHome";
import UserHome from "./screens/user/UserHome";
import PrivateHome from './screens/private/PrivateHome';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      {/* Private Routes */}
      <Route path="/" element={<PrivateRoutes />}>
      <Route path="/private-home" element={<PrivateHome />} />
        {/* Routes spécifiques aux utilisateurs privés */}
      </Route>

      {/* Admin Routes */}
      <Route path="/" element={<AdminRoutes />}>
        {/* Routes spécifiques aux administrateurs */}
      <Route path="/admin-home" element={<AdminHome />} />

      </Route>

      {/* User Routes */}
      <Route path="/" element={<UserRoutes />}>
      <Route path="/user-home" element={<UserHome />} />
        {/* Routes spécifiques aux utilisateurs réguliers */}
      </Route>

      {/* Route générique pour gérer toutes les autres routes non définies */}
      <Route path="*" element={<NotFoundScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
