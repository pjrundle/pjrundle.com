import { ComponentType, Suspense, useEffect, useRef } from "react";
import { useLocation } from "wouter";

import { Home } from "./pages/Home/Home.tsx";

// Prevent browser from restoring scroll position on refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const ScrollToTop = () => {
  const [location] = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location]);
  return null;
};

// Route configuration
const routes: { path: string; Component: ComponentType }[] = [
  { path: "/", Component: Home },
];

// Keeps visited routes mounted, hides inactive ones with CSS
const KeepAliveRoutes = () => {
  const [location] = useLocation();
  const visitedRef = useRef<Set<string>>(new Set([location]));

  // Track visited routes
  if (!visitedRef.current.has(location)) {
    visitedRef.current.add(location);
  }

  return (
    <>
      {routes.map(({ path, Component }) => {
        const isActive = location === path;
        const hasVisited = visitedRef.current.has(path);

        // Only render if visited (lazy mount on first visit)
        if (!hasVisited) return null;

        return (
          <div key={path} style={{ display: isActive ? "block" : "none" }}>
            <Suspense>
              <Component />
            </Suspense>
          </div>
        );
      })}
    </>
  );
};

const App__Inner = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <div className="bg:color-gray-25">
          <KeepAliveRoutes />
        </div>
      </main>
    </>
  );
};

export function App() {
  return <App__Inner />;
}
