import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Brandon Grier Hello
                World
            </header>
            <h1 style={{ border: "1px solid blue", padding: "4px" }}>
                This is a new header
            </h1>
            <Container>
                <Row>
                    <Col className="App-column1">First column.</Col>
                    <Col className="App-column2">
                        Second Column
                        <img
                            src="https://www.worldlifeexpectancy.com/images/a/w/b/vulpes-ferrilata/vulpes-ferrilata.jpg"
                            alt="A picture of a tibetan fox"
                        />
                    </Col>
                </Row>
            </Container>
            Unordered List:
            <ul>
                <li>One thing</li>
                <li>Another thing</li>
                <li>A third thing</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
