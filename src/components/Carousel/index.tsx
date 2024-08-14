import { ReactNode, useState } from "react";
import SelectedIdxProvider from "./context";
import Indicator from "./Indicator";
import Slider from "./Slider";

// eslint-disable-next-line react-refresh/only-export-components
export const Carousel = { Slider, Indicator };

interface Props {
  children: ReactNode;
}

export default function CarouselContext({ children }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <SelectedIdxProvider
      selectedIdx={selectedIdx}
      setSelectedIdx={setSelectedIdx}
    >
      {children}
    </SelectedIdxProvider>
  );
}
