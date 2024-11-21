import * as S from "./SideBar.styled";
import { useState, useEffect, ChangeEvent } from "react";
import { findUsers } from "../../api.ts";

type Props = {
  setUsers: (users: []) => void;
};

export default function SideBar({ setUsers }: Props) {
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (searchVal) findUsers(searchVal).then((users) => setUsers(users));
  }, [searchVal, setUsers]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      <S.Wrapper>
        <S.Logo src="/git-logo.png" />
        <S.Search
          name="search"
          type="text"
          placeholder="Enter user login for start search"
          value={searchVal}
          onChange={onChange}
        />
      </S.Wrapper>
    </>
  );
}
