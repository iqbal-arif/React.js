import {createRoot} from "react-dom/client";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";

function App() {
    return (<>
        <Container className="app" tabIndex={2}>
            <Link className = "link-kit" tabIndex={3} href="https://react-tutorial.app">React Tutorial</Link>
            <Button className = "link-button" tabIndex={3} disabled={true}>Login</Button>
            <Input className="link-Input" placeholder="Full Name" name="full_name" />
        </Container>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);
