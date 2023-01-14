import {
  Wrapper,
  Title,
  List,
  Item,
  Photo,
  UserName,
  UserInfo,
} from "./UserList.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../services/users-api";

export function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  console.log(users);

  return (
    <main>
      <Wrapper>
        <Title>Working with GET request</Title>
        <List>
          {users.map((user) => (
            <Item key={user.id}>
              <Photo src={user.photo} alt={user.name} />
              <UserName>{user.name}</UserName>
              <UserInfo>{user.position}</UserInfo>
              <UserInfo>{user.email}</UserInfo>
              <UserInfo>{user.phone}</UserInfo>
            </Item>
          ))}
        </List>
      </Wrapper>
    </main>
  );
}
