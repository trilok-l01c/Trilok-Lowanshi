import { useState } from "react";

function App() {
    return (
        <div
            style={{
                margin: "120px auto",
                backgroundColor: "#a27c24ff",
                width: "400px",
            }}
        >
            <Counter />
            <Text />
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

function Text() {
    const [txt, setTxt] = useState("");
    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    const newTxt = e.target.value;
                    setTxt(newTxt);
                }}
            />
            <p>{txt}</p>
        </>
    );
}
export default App;
