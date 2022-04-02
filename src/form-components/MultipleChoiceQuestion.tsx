import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;

interface answerInt {
    selectAnswer: (cans: string) => void;
    answer: string;
    options: string[];
}
function SelectAnswer({
    answer,
    selectAnswer,
    options
}: answerInt): JSX.Element {
    function updateAns(event: ChangeEvent) {
        selectAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="selectAnswer">
                <Form.Label>What is the right answer?</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={updateAns}
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "center"
                    }}
                >
                    {options.map((x: string) => (
                        <option key={x} value={x}>
                            {x}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, selectAnswer] = useState<string>(options[0]);
    return (
        <div>
            <h3>Check Answer</h3>
            <SelectAnswer
                answer={answer}
                selectAnswer={selectAnswer}
                options={options}
            ></SelectAnswer>
            {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
