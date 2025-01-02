import * as S from "./UserList.styled.ts";
import { User } from "../../lib/types.ts";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination.tsx";

type Props = {
  users: User[];
  totalCount: number;
  page: number;
  totalPages: number;
  visiblePages: number[];
  goToPage: (page: number) => void;
};

export default function UserList({
  users,
  totalCount,
  page,
  totalPages,
  visiblePages,
  goToPage,
}: Props) {
  return (
    <S.User hidden={!totalCount}>
      <S.Wrapper>
        {users.map((user) => (
          <S.List key={user.id}>
            <S.Avatar src={user.avatar_url} alt="avatar" />
            <Link to={user.html_url} target="_blank" rel="noopener noreferrer">
              <S.Login>{user.login}</S.Login>
            </Link>
          </S.List>
        ))}
      </S.Wrapper>

      <Pagination
        page={page}
        totalPages={totalPages}
        visiblePages={visiblePages}
        goToPage={goToPage}
      />
    </S.User>
  );
}
