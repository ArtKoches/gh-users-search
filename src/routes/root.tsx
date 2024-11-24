import { useState } from "react";
import { useUsers } from "../hooks/useUsers.ts";
import SideBar from "../components/SideBar/SideBar.tsx";
import UserList from "../components/UserList/UserList.tsx";
import { GlobalStyle } from "../styles/Global.styled.ts";
import { Container } from "../styles/Common.styled.ts";
import { User } from "../components/UserList/UserList.styled.ts";

export default function Root() {
  const [search, setSearch] = useState("");
  const { users } = useUsers(search);

  console.log(users);

  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar users={users} setSearch={setSearch} />
        {/*if there is users data, render users list*/}
        {users.items.length > 0 && (
          <User>
            {users?.items?.map((user) => <UserList key={user.id} {...user} />)}
          </User>
        )}
      </Container>
    </>
  );
}
