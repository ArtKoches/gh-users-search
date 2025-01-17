import { GlobalStyle } from "../styles/Global.styled.ts";
import { Container } from "../styles/Common.styled.ts";
import { useUsersStore } from "../store/useUsersStore.ts";
import { useUsers } from "../hooks/useUsers.ts";
import { useSelectedUser } from "../hooks/useSelectedUser.ts";
import SearchBar from "../components/SearchBar/SearchBar.tsx";
import UserList from "../components/UserList/UserList.tsx";
import Dialog from "../components/Dialog/Dialog.tsx";
import UserDetails from "../components/UserDetails/UserDetails.tsx";
import AnchorBtn from "../components/AnchorBtn/AnchorBtn.tsx";

export default function Root() {
  const { isOpen, setOpen } = useUsersStore();
  const { users, onQueryChange } = useUsers();
  const { chosenUser, fetchUserDetails } = useSelectedUser();

  return (
    <>
      <GlobalStyle />
      <Container id="target">
        <SearchBar onSearch={onQueryChange} />
        <UserList users={users} onUserClick={fetchUserDetails} />
        <Dialog isOpen={isOpen} onClose={() => setOpen(false)}>
          {chosenUser && <UserDetails chosenUser={chosenUser} />}
        </Dialog>
        <AnchorBtn targetId="target" text="Up ⬆" scrollThreshold={200} />
      </Container>
    </>
  );
}
