import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>User Data</h1>

            {users.map(user => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}
        </div>
    );
}

export default App;