import { createContext, ReactNode, SetStateAction } from "react";

export const SelectedIdxContext = createContext<{
  selectedIdx: number;
  setSelectedIdx: React.Dispatch<SetStateAction<number>>;
}>({
  selectedIdx: 0,
  setSelectedIdx: () => {},
});

interface Props {
  children: ReactNode;
  selectedIdx: number;
  setSelectedIdx: React.Dispatch<SetStateAction<number>>;
}

export default function SelectedIdxProvider({
  children,
  selectedIdx,
  setSelectedIdx,
}: Props) {
  return (
    <SelectedIdxContext.Provider value={{ selectedIdx, setSelectedIdx }}>
      {children}
    </SelectedIdxContext.Provider>
  );
}
