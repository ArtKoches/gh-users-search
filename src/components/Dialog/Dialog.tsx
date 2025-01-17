import * as S from "./Dialog.styled.ts";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Dialog({ isOpen, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Outside click handler
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  return (
    <S.DialogWrapper ref={dialogRef} open={isOpen}>
      {children}
    </S.DialogWrapper>
  );
}
