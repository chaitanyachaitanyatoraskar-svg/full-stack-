import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    return (
        <div>
            <h1>User Form</h1>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h2>Hello {name}</h2>
        </div>
    );
}

export default App;