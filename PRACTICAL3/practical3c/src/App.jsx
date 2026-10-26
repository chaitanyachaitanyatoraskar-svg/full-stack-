function App() {
    const num1 = 20;
    const num2 = 30;

    function calculateSum(a, b) {
        return a + b;
    }

    return (
        <div>
            <h1>Addition Program</h1>
            <p>Number 1: {num1}</p>
            <p>Number 2: {num2}</p>
            <p>Sum: {calculateSum(num1, num2)}</p>
        </div>
    );
}

export default App;