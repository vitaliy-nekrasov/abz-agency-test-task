import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { UserList } from "./components/UserList/UserList";
import { PostForm } from "./components/PostForm/PostForm";
import { useState, useEffect } from "react";
import { getUsers } from "./services/users-api";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers(page).then((res) => {
      setUsers((prevUsers) => [...prevUsers, ...res.users]);
      setTotalPages(res.total_pages);
    });
    setIsLoading(false);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const addNewUser = (data) => {
    setUsers((prev) => [data, ...prev.slice(0, 5)]);
    setPage(1);
  };

  return (
    <>
      <Header />
      <Hero />
      {isLoading ? (
        <Loader />
      ) : (
        <UserList
          users={users}
          page={page}
          totalPages={totalPages}
          loadMore={loadMore}
        />
      )}
      <PostForm addNewUser={addNewUser} />
    </>
  );
}

export default App;
