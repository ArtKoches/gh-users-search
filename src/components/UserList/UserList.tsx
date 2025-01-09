import * as S from "./UserList.styled.ts";
import { User } from "../../lib/types.ts";
import Pagination from "../Pagination/Pagination.tsx";

type Props = {
  users: User[];
  totalCount: number;
  page: number;
  totalPages: number;
  visiblePages: number[];
  goToPage: (page: number) => void;
  onUserClick: (user: string) => void;
};

export default function UserList({
  users,
  totalCount,
  page,
  totalPages,
  visiblePages,
  goToPage,
  onUserClick,
}: Props) {
  return (
    <S.User hidden={!totalCount}>
      <S.Wrapper>
        {users.map((user) => (
          <S.List
            key={user.id}
            title={`${user.login} profile details`}
            onClick={() => onUserClick(user.login)}
          >
            <S.Avatar src={user.avatar_url} alt="avatar" />
            <S.Login>{user.login}</S.Login>
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
