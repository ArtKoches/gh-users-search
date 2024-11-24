import * as S from "./UserList.styled.ts";
import { User } from "../../lib/types.ts";
import { Link } from "react-router-dom";

export default function UserList(user: User) {
  return (
    <>
      <S.Wrapper>
        <Link to={user.html_url} target="_blank">
          <S.List>
            <S.Avatar src={user.avatar_url} alt="avatar" />
            <S.Login>{user.login}</S.Login>
          </S.List>
        </Link>
      </S.Wrapper>
    </>
  );
}
