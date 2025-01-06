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
            placeholder="User login"
            value={searchVal}
            onChange={handleSearchChange}
          />
          {isLoading && <S.Spinner />}
        </S.SearchBlock>

        <S.Sort hidden={!totalCount}>
          <S.SortButton
            title={"Sort by Repos (Descending)"}
            $isActive={order === "desc"}
            onClick={() => onSortOrder("desc")}
          >
            Sort by repos Descending
          </S.SortButton>
          <S.SortButton
            title={"Sort by Repos (Ascending)"}
            $isActive={order === "asc"}
            onClick={() => onSortOrder("asc")}
          >
            Sort by repos Ascending
          </S.SortButton>
        </S.Sort>

        <S.ResultCounter hidden={!searchVal}>
          {totalCount} results
        </S.ResultCounter>
      </S.Search>
    </S.Wrapper>
  );
}
