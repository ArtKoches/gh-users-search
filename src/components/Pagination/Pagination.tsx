import * as S from "./Pagination.styled";
import * as React from "react";
import { UsersData } from "../../lib/types.ts";

type Props = {
  users: UsersData;
  selectPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  getPaginationGroup: () => number[];
};

export default function Pagination({
  users,
  selectPage,
  goToPrevPage,
  goToNextPage,
  getPaginationGroup,
}: Props) {
  return (
    <>
      <S.Wrapper hidden={!users.total_count}>
        <button onClick={goToPrevPage}>Prev</button>
        {getPaginationGroup().map((item, index) => (
          <button key={index} onClick={selectPage}>
            {item}
          </button>
        ))}
        <button onClick={goToNextPage}>Next</button>
      </S.Wrapper>
    </>
  );
}
