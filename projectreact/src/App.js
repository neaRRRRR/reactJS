import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "kaan", message: "hello" },
    { name: "kaan1", message: "hello1" },
    { name: "kaan2", message: "hello2" }
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
