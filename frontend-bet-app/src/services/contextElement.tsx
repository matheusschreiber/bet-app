import React, { ReactNode, useContext, useEffect, useState } from "react";

const contextDefaultValues = {
  selected: 1,
  setSelected: (n: number) => {},
  isBetting: false,
  setIsBetting: (b: boolean) => {},
  isNewBetWindowCollapsed: true,
  setIsNewBetWindowCollapsed: (b: boolean) => {},
  isNewGroupWindowCollapsed: true,
  setIsNewGroupWindowCollapsed: (b: boolean) => {},
  isNewBetOrGroupWindowCollapsed: true,
  setIsNewBetOrGroupWindowCollapsed: (b: boolean) => {},
};

export const ContextElement = React.createContext(contextDefaultValues);

export function useContextValue() {
  return useContext(ContextElement);
}

type Props = {
  children: ReactNode;
};

export function ContextProvider({ children }: Props) {
  const [selected, setSelected] = useState<number>(0);
  const [isBetting, setIsBetting] = useState<boolean>(false);
  const [isNewBetWindowCollapsed, setIsNewBetWindowCollapsed] =
    useState<boolean>(true);
  const [isNewGroupWindowCollapsed, setIsNewGroupWindowCollapsed] =
    useState<boolean>(true);
  const [isNewBetOrGroupWindowCollapsed, setIsNewBetOrGroupWindowCollapsed] =
    useState<boolean>(true);

  const value = {
    selected,
    setSelected,
    isBetting,
    setIsBetting,
    isNewBetWindowCollapsed,
    setIsNewBetWindowCollapsed,
    isNewGroupWindowCollapsed,
    setIsNewGroupWindowCollapsed,
    isNewBetOrGroupWindowCollapsed,
    setIsNewBetOrGroupWindowCollapsed,
  };

  return (
    <>
      <ContextElement.Provider value={value}>
        {children}
      </ContextElement.Provider>
    </>
  );
}
