import * as S from "./SideBar.styled";
import { ChangeEvent } from "react";
import { UsersData } from "../../lib/types.ts";

type Props = {
  users: UsersData;
  setSearch: (query: string) => void;
};

export default function SideBar({ users, setSearch }: Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <>
      <S.Wrapper>
        <S.Logo src="/git-logo.png" alt="logo" />
        <S.Search>
          <S.SearchInput
            name="search"
            type="text"
            placeholder="Enter user login for start search"
            onChange={onChange}
          />
          {/*if there is matches, display number of results*/}
          {users.total_count > 0 && (
            <S.ResultCounter>{users.total_count} results</S.ResultCounter>
          )}
        </S.Search>
      </S.Wrapper>
    </>
  );
}
