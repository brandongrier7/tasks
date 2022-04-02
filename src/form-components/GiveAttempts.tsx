import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [remainAttempts, setRemainAttempts] = useState<string>("");
    const usedAnAttempt = parseInt(remainAttempts) || 0;

    function addAttempt(): void {
        setAttempts(attempts + usedAnAttempt);
    }
    function minusAttempt(): void {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
                <span>Attempts: {attempts}</span>
                <Button onClick={addAttempt}>Gain</Button>
                <Button onClick={minusAttempt} disabled={attempts === 0}>
                    Use
                </Button>
            </div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={remainAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRemainAttempts(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}
