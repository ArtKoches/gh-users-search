import { User } from "../../lib/types.ts";
import { Avatar, List, Login, Wrapper } from "./UserList.styled.ts";
import { Link } from "react-router-dom";

export default function UserList(user: User) {
  return (
    <>
      <Wrapper>
        <ul key={user.id}>
          <Link to={user.html_url} target="_blank">
            <List>
              <Avatar
                src={user.avatar_url}
                width={150}
                height={150}
                alt="avatar"
              />
              <Login>{user.login}</Login>
            </List>
          </Link>
        </ul>
      </Wrapper>
    </>
  );
}
