import { useState } from "react";
function App() {
    const [fruits ]= useState(["Apple", "Banana", "Mango"]);
    return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))
            }
        </div>
    );
}
export default App;