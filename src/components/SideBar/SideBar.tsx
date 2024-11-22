import * as S from "./SideBar.styled";
import { ChangeEvent } from "react";

type Props = {
  setSearch: (query: string) => void;
};

export default function SideBar({ setSearch }: Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <>
      <S.Wrapper>
        <S.Logo src="/git-logo.png" />
        <S.Search
          name="search"
          type="text"
          placeholder="Enter user login for start search"
          onChange={onChange}
        />
      </S.Wrapper>
    </>
  );
}
