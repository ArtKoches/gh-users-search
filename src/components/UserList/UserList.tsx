import * as S from "./UserList.styled.ts";
import { User, UsersData } from "../../lib/types.ts";
import { Link } from "react-router-dom";

type Props = {
  users: UsersData;
};

export default function UserList({ users }: Props) {
  return (
    <>
      <S.User hidden={!users.total_count}>
        <S.Wrapper>
          {users.items.map((user: User) => (
            <Link to={user.html_url} target="_blank" key={user.id}>
              <S.List>
                <S.Avatar src={user.avatar_url} alt="avatar" />
                <S.Login>{user.login}</S.Login>
              </S.List>
            </Link>
          ))}
        </S.Wrapper>
      </S.User>
    </>
  );
}
