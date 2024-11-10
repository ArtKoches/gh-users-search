import * as S from "./SideBar.styled";
import { useState, ChangeEvent } from "react";
import { findUsers } from "../../api.ts";

export default function SideBar() {
  const [searchVal, setSearchVal] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  console.log(searchVal);
  findUsers(searchVal);

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
