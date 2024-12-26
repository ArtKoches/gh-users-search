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
            type="search"
            placeholder="Login..."
            onChange={onChange}
          />
          {users.total_count > 0 && (
            <S.ResultCounter>{users.total_count} results</S.ResultCounter>
          )}
        </S.Search>
      </S.Wrapper>
    </>
  );
}
