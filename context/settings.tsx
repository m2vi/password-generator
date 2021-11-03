import { createContext, useContext, useReducer } from 'react';

export interface SettingsProps {
  length2: number;
  letters: boolean;
  numbers: boolean;
  specialCharacters: boolean;
  lockedSpecialCharacters: boolean;
}

export const initalState: SettingsProps = {
  length2: 32,
  letters: true,
  numbers: true,
  specialCharacters: true,
  lockedSpecialCharacters: false,
};

const SettingsContext = createContext(initalState as any);

export const settingsReducer = (state: SettingsProps, newState: SettingsProps) => {
  return newState;
};

export const SettingsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(settingsReducer, initalState);
  const value = { state, dispatch };
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    console.error('useSettings must be used within a SearchProvider');
  }
  return context;
};
