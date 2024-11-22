import { useState } from "react";
import { useUsers } from "../hooks/useUsers.ts";
import SideBar from "../components/SideBar/SideBar.tsx";
import UserList from "../components/UserList/UserList.tsx";
import { GlobalStyle } from "../styles/Global.styled.ts";
import { Container } from "../styles/Common.styled.ts";

export default function Root() {
  const [search, setSearch] = useState("");
  const { users } = useUsers(search);

  console.log(users);

  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar setSearch={setSearch} />

        {users.items.map((user) => (
          <UserList {...user} />
        ))}
      </Container>
    </>
  );
}
