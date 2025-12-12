import { useState } from "react";

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

function Counter() {
    const [cnt, setCnt] = useState(0);
    return (
        <>
            <button onClick={() => setCnt(cnt + 1)}>Increment</button>
            <p>{cnt}</p>
        </>
    );
}
export default App;
