import { ReactNode, useRef } from "react";
import * as S from "./Dialog.styled.ts";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Dialog({ isOpen, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <S.DialogWrapper ref={dialogRef} open={isOpen}>
      {children}
      <S.DialogCloseButton title={"Close dialog"} onClick={onClose}>
        X
      </S.DialogCloseButton>
    </S.DialogWrapper>
  );
}
