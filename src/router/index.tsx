import { Suspense } from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import BlankLayout from "@/layouts/BlankLayout";
import { routes } from "./routes";

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {routes.map((route, index) => {
          const Layout = route.layout === "blank" ? BlankLayout : MainLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Suspense fallback={<PageLoader />}>
                    {route.element}
                  </Suspense>
                </Layout>
              }
            />
          );
        })}
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default AppRouter;
