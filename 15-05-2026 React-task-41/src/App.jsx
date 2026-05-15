import {
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";

function App() {

  const [users, setUsers] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const fetchUsers = useCallback(() => {

    const controller =
      new AbortController();

    setLoading(true);

    fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        signal: controller.signal
      }
    )

    .then((res) => res.json())

    .then((data) => {

      const filterData =
        data.filter((user) =>
          user.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

      setUsers(filterData);
    })

    .catch((err) => {

      if (err.name !== "AbortError") {
        console.log(err);
      }

    })

    .finally(() => {
      setLoading(false);
    });

    return () => {

      controller.abort();

      console.log("Cleanup Run");
    };

  }, [search]);

  useEffect(() => {

    const cleanup =
      fetchUsers();

    return cleanup;

  }, [fetchUsers]);

  const totalUsers = useMemo(() => {

    console.log("Calculating...");

    for (let i = 0; i < 1000000; i++) {}

    return users.length;

  }, [users]);

  return (

    <div>

      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button
        onClick={fetchUsers}
        style={{ marginLeft: "10px" }}
      >
        Refresh
      </button>

      {
        loading && <p>Loading...</p>
      }

      <h2>
        Total Users: {totalUsers}
      </h2>

      {
        users.map((user) => (

          <div key={user.id}>

            <h3>{user.name}</h3>

            <p>{user.email}</p>

          </div>

        ))
      }

    </div>
  );
}

export default App;