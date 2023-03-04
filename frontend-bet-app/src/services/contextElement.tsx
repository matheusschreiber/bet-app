import React, { ReactNode, useContext, useEffect, useState } from "react";

const contextDefaultValues = {
  selected: 0,
  setSelected: (n: number) => {},
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

  const value = {
    selected,
    setSelected,
  };

  return (
    <>
      <ContextElement.Provider value={value}>
        {children}
      </ContextElement.Provider>
    </>
  );
}
