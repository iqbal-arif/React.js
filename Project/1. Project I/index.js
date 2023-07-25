import {createRoot} from "react-dom/client";
import Link from "./Link.js";
import Button from "./Button.js";
import Container from "./Container.js"
import Input from "./Input.js"

function App() {
    return (
        <>
        <Link/>
        <Button/>
        <Container/>
        <Input/>
        </>
    );
}

createRoot(document.querySelector("#react-root")).render(<App />);


/*************Solution******************/

import {createRoot} from "react-dom/client";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";

function App() {
    return (<>
        <Container>
            { /* It doesn't matter what you write here. This is where you can use the components that you've defined. It's important, however, to import them in this file. */ }
            <Link href="https://react-tutorial.app">React Tutorial</Link>
            <Button disabled={true}>Login</Button>
            <Input placeholder="Full Name" name="full_name" />
        </Container>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);
