import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface AnswerProps {
    setAnswer: (newAnswer: string) => void;
    answer: string;
}

function UserAnswer({ answer, setAnswer }: AnswerProps): JSX.Element {
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "center"
                    }}
                />
            </Form.Group>
            <div>The entered answer is: {answer}.</div>
        </div>
    );
}

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer:</h3>
            <UserAnswer answer={answer} setAnswer={setAnswer}></UserAnswer>
            {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
