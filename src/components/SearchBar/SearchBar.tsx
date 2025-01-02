import * as S from "./SearchBar.styled.ts";
import { ChangeEvent } from "react";

type Props = {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  totalCount: number;
};

export default function SearchBar({ search, onChange, totalCount }: Props) {
  return (
    <S.Wrapper>
      <S.Logo src="/git-logo.png" alt="logo" />
      <S.Search>
        <S.SearchInput
          name="search"
          type="search"
          placeholder="Type user login for start..."
          value={search}
          onChange={onChange}
        />

        <S.ResultCounter hidden={!totalCount}>
          {totalCount} results
        </S.ResultCounter>
      </S.Search>
    </S.Wrapper>
  );
}
