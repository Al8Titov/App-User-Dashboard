import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Category from "./pages/Category";
import ItemDetail from "./pages/ItemDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import { statsLoader } from "./pages/Stats"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="stats" element={<Stats />} loader={statsLoader} />
        </Route>
        <Route path="/category" element={<Category />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Route>
    </>
  )
);