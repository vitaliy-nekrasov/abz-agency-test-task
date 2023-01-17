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
import { Button } from "../Button/Button";
import placeholder from "../../img/Placeholder.jpg";

export function UserList({ users, page, totalPages, loadMore }) {
  const sortedUsers = users.sort(
    (a, b) => b.registration_timestamp - a.registration_timestamp
  );

  return (
    <main>
      <Wrapper>
        <Title>Working with GET request</Title>
        <List>
          {sortedUsers.map((user) => {
            if (
              user.photo ===
              "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png"
            ) {
              return (
                <Item key={user.id}>
                  <Photo src={placeholder} alt={user.name} />
                  <Div>
                    <UserName>{user.name}</UserName>
                    <UserInfo>{user.position}</UserInfo>
                    <UserInfo>{user.email}</UserInfo>
                    <UserInfo>{user.phone}</UserInfo>
                  </Div>
                </Item>
              );
            }
            return (
              <Item key={user.id}>
                <Photo src={user.photo} alt={user.name} />
                <Div>
                  <UserName>{user.name}</UserName>
                  <UserInfo>{user.position}</UserInfo>
                  <UserInfo>{user.email}</UserInfo>
                  <UserInfo>{user.phone}</UserInfo>
                </Div>
              </Item>
            );
          })}
        </List>
        {page === totalPages ? null : (
          <Button type={"button"} btnHandler={loadMore} text="Show more" />
        )}
      </Wrapper>
    </main>
  );
}
