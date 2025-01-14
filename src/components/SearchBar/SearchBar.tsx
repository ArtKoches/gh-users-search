import * as S from "./SearchBar.styled.ts";
import { ChangeEvent } from "react";
import { SortOrder } from "../../lib/types.ts";
import { ErrorMsg } from "../../styles/Common.styled.ts";

type Props = {
  searchVal: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  totalCount: number;
  order: SortOrder;
  onSortOrder: (order: "asc" | "desc") => void;
  isLoading: boolean;
  error: string;
};

export default function SearchBar({
  searchVal,
  handleSearchChange,
  totalCount,
  order,
  onSortOrder,
  isLoading,
  error,
}: Props) {
  return (
    <S.Wrapper>
      <S.Logo src="/git-logo.png" alt="logo" />
      <S.Search>
        <S.SearchBlock>
          <S.SearchInput
            name="search"
            type="search"
            placeholder="Github user login"
            value={searchVal}
            onChange={handleSearchChange}
          />

          {isLoading && <S.Spinner />}
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </S.SearchBlock>

        <S.Sort hidden={!totalCount}>
          <S.SortTitle>Sort by repos:</S.SortTitle>

          <S.SortButton
            $isActive={order === "desc"}
            onClick={() => onSortOrder("desc")}
          >
            Descending
          </S.SortButton>
          <S.SortButton
            $isActive={order === "asc"}
            onClick={() => onSortOrder("asc")}
          >
            Ascending
          </S.SortButton>
        </S.Sort>

        <S.ResultCounter hidden={!searchVal || error !== ""}>
          {totalCount} results
        </S.ResultCounter>
      </S.Search>
    </S.Wrapper>
  );
}
