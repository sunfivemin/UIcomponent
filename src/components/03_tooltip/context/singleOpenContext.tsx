import { createContext, useContext, useState, ReactNode } from 'react';

type SingleOpenContextType = {
  openTooltipId: string | null;
  setOpenTooltipId: (id: string | null) => void;
};

const SingleOpenContext = createContext<SingleOpenContextType | null>(null);

export const useSingleOpen = () => {
  const context = useContext(SingleOpenContext);
  if (!context) {
    throw new Error('useSingleOpen must be used within SingleOpenProvider');
  }
  return context;
};

interface SingleOpenProviderProps {
  children: ReactNode;
}

export const SingleOpenProvider = ({ children }: SingleOpenProviderProps) => {
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  return (
    <SingleOpenContext.Provider value={{ openTooltipId, setOpenTooltipId }}>
      {children}
    </SingleOpenContext.Provider>
  );
};
