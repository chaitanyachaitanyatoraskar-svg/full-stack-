import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(
            search.toLowerCase()
        )
    );

    return (
        <div>
            <h1>User Search</h1>

            <input
                type="text"
                placeholder="Search User"
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            <ul>
                {
                    filteredUsers.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;