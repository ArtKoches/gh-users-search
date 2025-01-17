import * as S from "./SearchBar.styled.ts";
import { ChangeEvent } from "react";
import { ErrorMsg } from "../../styles/Common.styled.ts";
import { useUsersStore } from "../../store/useUsersStore.ts";

type Props = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const { query, order, setOrder, totalCount, isLoading, error } =
    useUsersStore();

  return (
    <S.Wrapper>
      <S.Logo src="/git-logo.png" alt="logo" />
      <S.Search>
        <S.SearchBlock>
          <S.SearchInput
            name="search"
            type="search"
            placeholder="Type GitHub username for start..."
            value={query}
            onChange={onSearch}
          />
          {isLoading && <S.Spinner />}
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </S.SearchBlock>

        <S.Sort hidden={!totalCount}>
          <S.SortTitle>Sort by repos:</S.SortTitle>
          <S.SortButton
            title={"Descending sort"}
            $isActive={order === "desc"}
            onClick={() => setOrder("desc")}
          >
            Descending
          </S.SortButton>
          <S.SortButton
            title={"Ascending sort"}
            $isActive={order === "asc"}
            onClick={() => setOrder("asc")}
          >
            Ascending
          </S.SortButton>
        </S.Sort>

        <S.ResultCounter hidden={!query || error !== null}>
          {totalCount} results
        </S.ResultCounter>
      </S.Search>
    </S.Wrapper>
  );
}
