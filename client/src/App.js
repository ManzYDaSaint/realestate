import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoadingSpinner from "./infinity";

const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"))

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <Dashboard />
        </Suspense>
      )
    }
  ]);

  return (
      <main>
        <RouterProvider router={router} />
      </main>
  );
};

export default App;
