import { GlobalStyle } from "../styles/Global.styled.ts";
import { Container } from "../styles/Common.styled.ts";
import { useUsers } from "../hooks/useUsers.ts";
import { usePagination } from "../hooks/usePagination.ts";
import { useSortOrder } from "../hooks/useSortOrder.ts";
import { useSelectedUser } from "../hooks/useSelectedUser.ts";
import SearchBar from "../components/SearchBar/SearchBar.tsx";
import UserList from "../components/UserList/UserList.tsx";
import Dialog from "../components/Dialog/Dialog.tsx";
import UserDetails from "../components/UserDetails/UserDetails.tsx";

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
    setIsLoading,
    error,
  } = useUsers(sortOrder);

  const { totalPages, visiblePages } = usePagination(
    page,
    ITEMS_PER_PAGE,
    totalCount,
  );

  const { isOpen, setIsOpen, selectedUser, fetchUserDetails } =
    useSelectedUser(setIsLoading);

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
          error={error}
        />

        <UserList
          users={users}
          totalCount={totalCount}
          page={page}
          totalPages={totalPages}
          visiblePages={visiblePages}
          goToPage={goToPage}
          onUserClick={fetchUserDetails}
        />

        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <UserDetails user={selectedUser} />
        </Dialog>
      </Container>
    </>
  );
}
