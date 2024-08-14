import styled from "@emotion/styled";
import { motion, PanInfo } from "framer-motion";
import { useContext } from "react";
import { SelectedIdxContext } from "./context";

interface Props {
  images: string[];
}

export default function Slider({ images }: Props) {
  const { selectedIdx, setSelectedIdx } = useContext(SelectedIdxContext);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50 && selectedIdx < images.length - 1) {
      setSelectedIdx((prev) => prev + 1);
    } else if (info.offset.x > 50 && selectedIdx > 0) {
      setSelectedIdx((prev) => prev - 1);
    }
  };

  const calcaulateZIdx = (idx: number) => {
    return images.length - Math.abs(idx - selectedIdx);
  };

  const calculateGap = (idx: number) => {
    if (Math.abs(idx - selectedIdx) <= 1) return (idx - selectedIdx) * 80;
    else {
      if (idx - selectedIdx > 0) return 80 + (idx - selectedIdx - 1) * 40;
      else return -80 - (selectedIdx - idx - 1) * 40;
    }
  };

  return (
    <Container>
      {images.map((image, index) => (
        <ImageWrapper
          onClick={() => setSelectedIdx(index)}
          zIdx={calcaulateZIdx(index)}
          idx={index}
          selectedIdx={selectedIdx}
          gap={calculateGap(index)}
          key={index}
        >
          <Image
            src={image}
            layout
            initial={false}
            key={index}
            dragElastic={0}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
              width: selectedIdx === index ? 200 : 80,
              height: selectedIdx === index ? 200 : 80,
            }}
          />
        </ImageWrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  height: 200px;
  width: 100vw;
`;

const ImageWrapper = styled.button<{
  idx: number;
  zIdx: number;
  selectedIdx: number;
  gap: number;
}>`
  /* transform: ${({ idx }) => `translateX(${-idx * 60}px)`}; */
  position: absolute;
  bottom: 0;
  /* left: ${({ idx, selectedIdx }) =>
    `calc(50% + ${(idx - selectedIdx) * 60}px)`}; */
  left: ${({ gap }) => `calc(50% + ${gap}px)`};
  transform: translateX(-50%);
  z-index: ${({ zIdx }) => zIdx * 10};
`;

const Image = styled(motion.img)`
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004d;
  border: 4px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
`;
