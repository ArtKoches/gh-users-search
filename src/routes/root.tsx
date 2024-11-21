import SideBar from "../components/SideBar/SideBar.tsx";
import { useState } from "react";
import { User } from "../lib/types.ts";

export default function Root() {
  const [users, setUsers] = useState<User[]>([]);

  console.log(users);

  return (
    <>
      <SideBar setUsers={setUsers} />
      {users.map((user) => (
        <div key={user.id}>
          <img width={90} height={90} src={user.avatar_url} alt="avatar" />
          {user.login}
        </div>
      ))}
    </>
  );
}
