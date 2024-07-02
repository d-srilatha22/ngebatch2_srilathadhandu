import React, { useEffect, useState } from "react";

export default function FetchCall() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      //return res.json;
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch(e=>console.log(e));
    getData();
    //getData().then(setUsers);
  }, []);
  
  if (users.length == 0) {
    return <div>Loading the data.....Please wait</div>;
  }
  return (
    <div>
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>{u?.name}</li>
        ))}
      </ul>
    </div>
  );
}
