import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

/** UI state shared across the app; add fields here as needed (e.g. colorMode). */
export type AppUiContextValue = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const AppUiContext = createContext<AppUiContextValue | null>(null);

export function AppUiProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = useMemo(
    () => ({ isMenuOpen, setIsMenuOpen }),
    [isMenuOpen],
  );

  return (
    <AppUiContext.Provider value={value}>{children}</AppUiContext.Provider>
  );
}

export function useAppUi(): AppUiContextValue {
  const ctx = useContext(AppUiContext);
  if (!ctx) {
    throw new Error("useAppUi must be used within AppUiProvider");
  }
  return ctx;
}

/** Stable handler to close the slide-out menu (e.g. after in-app navigation). */
export function useCloseMenu(): () => void {
  const { setIsMenuOpen } = useAppUi();
  return useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);
}
