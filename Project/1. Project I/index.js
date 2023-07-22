import {createRoot} from "react-dom/client";
import Link from "./Link.js";

function App() {
    return (
        <>
        <Link />

        </>
    );
}

createRoot(document.querySelector("#react-root")).render(<App />);