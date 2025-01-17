import * as S from "./AnchorBtn.styled.ts";
import { useCallback, useEffect, useState } from "react";

type Props = {
  targetId: string;
  text: string;
  scrollThreshold: number;
};

export default function AnchorBtn({ targetId, text, scrollThreshold }: Props) {
  const [isVisible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY > scrollThreshold) setVisible(true);
    else setVisible(false);
  }, [scrollThreshold]);

  const onClick = () => {
    const targetEl = document.getElementById(targetId);

    if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    isVisible && (
      <S.AnchorButton title="Go up" onClick={onClick}>
        {text}
      </S.AnchorButton>
    )
  );
}
