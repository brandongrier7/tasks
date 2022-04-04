import React, { useState } from "react";
import { Button } from "react-bootstrap";
import sketch from "../assets/quizzersketch.jpg";

export function ShowTasks(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            {visible && <div></div>}
            <img src={sketch} />
            <Button onClick={() => setVisible(!visible)}>Show/Hide</Button>
        </div>
    );
}

export function Quizzer(): JSX.Element {
    return <h3>Quizzer</h3>;
}
