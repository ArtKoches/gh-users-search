import { GlobalStyle } from "../styles/Global.styled.ts";
import { Container } from "../styles/Common.styled.ts";
import { useUsers } from "../hooks/useUsers.ts";
import { usePagination } from "../hooks/usePagination.ts";
import SearchBar from "../components/SearchBar/SearchBar.tsx";
import UserList from "../components/UserList/UserList.tsx";
import { useSortOrder } from "../hooks/useSortOrder.ts";

export default function Root() {
  const { sortOrder, handleSort } = useSortOrder("desc");

  const {
    searchVal,
    handleSearchChange,
    users,
    totalCount,
    page,
    ITEMS_PER_PAGE,
    goToPage,
    isLoading,
  } = useUsers(sortOrder);

  const { totalPages, visiblePages } = usePagination(
    page,
    ITEMS_PER_PAGE,
    totalCount,
  );

  console.log(users);
  console.log(page);
  console.log(sortOrder);
  console.log(isLoading);

  return (
    <>
      <GlobalStyle />
      <Container>
        <SearchBar
          searchVal={searchVal}
          handleSearchChange={handleSearchChange}
          totalCount={totalCount}
          order={sortOrder}
          onSortOrder={handleSort}
          isLoading={isLoading}
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
