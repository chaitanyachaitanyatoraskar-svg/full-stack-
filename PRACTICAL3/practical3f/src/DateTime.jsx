function DateTime() {
    const currentDate = new Date();

    return (
        <div>
            <h2>Current Date and Time</h2>

            <p>
                Date: {currentDate.toLocaleDateString()}
            </p>

            <p>
                Time: {currentDate.toLocaleTimeString()}
            </p>
        </div>
    );
}

export default DateTime;