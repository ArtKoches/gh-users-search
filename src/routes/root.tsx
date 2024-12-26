import { useState } from "react";
import { useUsers } from "../hooks/useUsers.ts";
import { usePagination } from "../hooks/usePagination.ts";
import SideBar from "../components/SideBar/SideBar.tsx";
import UserList from "../components/UserList/UserList.tsx";
import { GlobalStyle } from "../styles/Global.styled.ts";
import Pagination from "../components/Pagination/Pagination.tsx";
import { Container } from "../styles/Common.styled.ts";

export default function Root() {
  const [search, setSearch] = useState("");
  const { page, selectPage, goToPrevPage, goToNextPage, getPaginationGroup } =
    usePagination();
  const { users } = useUsers(search, page);

  console.log(users);
  console.log(page);
  console.log(getPaginationGroup());

  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar users={users} setSearch={setSearch} />
        <UserList users={users} />
        <Pagination
          users={users}
          selectPage={selectPage}
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
          getPaginationGroup={getPaginationGroup}
        />
      </Container>
    </>
  );
}
