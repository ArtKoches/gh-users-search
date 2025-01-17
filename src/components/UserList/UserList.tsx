import * as S from "./UserList.styled.ts";
import { User } from "../../lib/types.ts";
import Pagination from "../Pagination/Pagination.tsx";
import { useUsersStore } from "../../store/useUsersStore.ts";

type Props = {
  users: User[];
  onUserClick: (user: string) => void;
};

export default function UserList({ users, onUserClick }: Props) {
  const { page, setPage, totalCount } = useUsersStore();

  return (
    <S.User hidden={!totalCount}>
      <S.Wrapper>
        {users.map((user) => (
          <S.List
            key={user.id}
            title={`Open ${user.login} profile details`}
            onClick={() => onUserClick(user.login)}
          >
            <S.Avatar src={user.avatar_url} alt="avatar" />
            <S.Login>{user.login}</S.Login>
          </S.List>
        ))}
      </S.Wrapper>

      <Pagination page={page} setPage={setPage} />
    </S.User>
  );
}
