import { useState, useEffect } from "react";

function App() {
    return (
        <div
            style={{
                margin: "120px auto",
                backgroundColor: "#a27c24ff",
                width: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
    const [data, setData] = useState("");
    const [txt, setTxt] = useState("");
    const [isloading, setLoading] = useState(false);
    async function loadData() {
        setLoading(true);
        const data = await apiCall();
        setData(data);
        setLoading(false);
    }
    useEffect(() => {
        // using async function inside the useEffect's callback function
        loadData();
    }, [txt]); // leaving a empty dependency array, means the funciton will call at page loading.
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
            <div>{isloading ? "Loading..." : data}</div>
        </>
    );
}

// false API call
async function apiCall() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello, world"), 5000);
    });
}

export default App;
