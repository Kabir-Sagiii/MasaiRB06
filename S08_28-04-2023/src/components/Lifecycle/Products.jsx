import { useEffect, useState } from "react";
function Users() {
  const [usersdata, setUsersData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers();
  }, [page]);

  //   useEffect(() => {
  //     console.log("ckdjsbcsdjkbsdjk");
  //   }, []);

  const getUsers = async () => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await res.json();
    console.log(data.data);
    setUsersData(data.data);
  };

  const changePage = (value) => {
    setPage(page + value);
  };

  return (
    <div>
      <h2>Users Details</h2>
      {usersdata.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "50px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
              gridColumn: "1 / 4",
            }}
          >
            <button
              disabled={page === 1}
              onClick={() => {
                changePage(-1);
              }}
            >
              Previous
            </button>
            &nbsp;&nbsp;
            <button>{page}</button>&nbsp;&nbsp;
            <button
              disabled={page === 2}
              onClick={() => {
                changePage(+1);
              }}
            >
              Next
            </button>
          </div>
          {usersdata.map((user) => {
            return (
              <div key={user.id}>
                <img src={user.avatar} width={300} height={300} />
                <p>{user.email}</p>
                <button>Profile Details</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Users Data Found</h2>
      )}
    </div>
  );
}
export default Users;
