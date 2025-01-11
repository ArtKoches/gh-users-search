import * as S from "./SearchBar.styled.ts";
import { ChangeEvent } from "react";
import { SortOrder } from "../../lib/types.ts";

type Props = {
  searchVal: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  totalCount: number;
  order: SortOrder;
  onSortOrder: (order: "asc" | "desc") => void;
  isLoading: boolean;
};

export default function SearchBar({
  searchVal,
  handleSearchChange,
  totalCount,
  order,
  onSortOrder,
  isLoading,
}: Props) {
  return (
    <S.Wrapper>
      <S.Logo src="/git-logo.png" alt="logo" />
      <S.Search>
        <S.SearchBlock>
          <S.SearchInput
            name="search"
            type="search"
            placeholder="Enter the user's login to start..."
            value={searchVal}
            onChange={handleSearchChange}
          />
          {isLoading && <S.Spinner />}
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

        <S.ResultCounter hidden={!searchVal}>
          {totalCount} results
        </S.ResultCounter>
      </S.Search>
    </S.Wrapper>
  );
}
