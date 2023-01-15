import {
  Wrapper,
  Title,
  List,
  Item,
  Photo,
  UserName,
  UserInfo,
  Div,
} from "./UserList.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../services/users-api";
import { Button } from "../Button/Button";

export function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  const sortedUsers = users.sort(
    (a, b) => b.registration_timestamp - a.registration_timestamp
  );

  // const buttonHandler = () => {
  //   incrementPage();
  // };

  // console.log(users);

  return (
    <main>
      <Wrapper>
        <Title>Working with GET request</Title>
        <List>
          {sortedUsers.map((user) => (
            <Item key={user.id}>
              <Photo src={user.photo} alt={user.name} />
              <Div>
                <UserName>{user.name}</UserName>
                <UserInfo>{user.position}</UserInfo>
                <UserInfo>{user.email}</UserInfo>
                <UserInfo>{user.phone}</UserInfo>
              </Div>
            </Item>
          ))}
        </List>
        <Button text="Show more" />
      </Wrapper>
    </main>
  );
}
