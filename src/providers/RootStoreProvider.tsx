import { useMemo } from 'react';
import { StoreContext } from 'contexts/rootContext';
import { RootStore } from 'stores/RootStore';

let store: RootStore;

export const RootStoreProvider = ({ children }: React.PropsWithChildren) => {
  const root = useMemo(() => store ?? new RootStore(), []);
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};
