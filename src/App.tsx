import { SkinProvider, TokensProvider } from "@theme-os/react";
import { Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { tokenStore } from "./design-system/design-system.ts";
import { Page404 } from "./pages/404/404.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { ProjectPage } from "./pages/Projects/Project.tsx";

// Design: Sometimes useful to disable images to focus on layout/spacing more easily
export const DISABLE_IMAGES = false;

// Prevent browser from restoring scroll position on refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const ScrollToTopOnRouteChange = () => {
  const [location] = useLocation();
  useEffect(() => window.scrollTo({ top: 0 }), [location]);
  return null;
};

export function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />

      <TokensProvider store={tokenStore}>
        <SkinProvider colorMode="dark">
          <div className="min-w:360px rel background-color:color-gray-0">
            <Header />

            <main className="rel">
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/projects/:slug">
                  <Suspense fallback={null}>
                    <ProjectPage />
                  </Suspense>
                </Route>
                <Route>
                  <Page404 />
                </Route>
              </Switch>
            </main>
            <Footer />
          </div>
        </SkinProvider>
      </TokensProvider>
    </>
  );
}
