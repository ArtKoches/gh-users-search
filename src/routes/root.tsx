import { GlobalStyle } from "../styles/Global.styled.ts";
import { Container } from "../styles/Common.styled.ts";
import { useUsers } from "../hooks/useUsers.ts";
import { usePagination } from "../hooks/usePagination.ts";
import SearchBar from "../components/SearchBar/SearchBar.tsx";
import UserList from "../components/UserList/UserList.tsx";

export default function Root() {
  const { search, onChange, users, totalCount, page, itemsPerPage, goToPage } =
    useUsers();
  const { totalPages, visiblePages } = usePagination(
    page,
    itemsPerPage,
    totalCount,
  );

  console.log(users);
  console.log(page);

  return (
    <>
      <GlobalStyle />
      <Container>
        <SearchBar
          search={search}
          onChange={onChange}
          totalCount={totalCount}
        />
        <UserList
          users={users}
          totalCount={totalCount}
          page={page}
          totalPages={totalPages}
          visiblePages={visiblePages}
          goToPage={goToPage}
        />
      </Container>
    </>
  );
}
