import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface colorsInt {
    color: string;
    setColor: (color: string) => void;
}
const colorss = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "black",
    "white",
    "brown"
];
function ListColors({ color, setColor }: colorsInt): JSX.Element {
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            {colorss.map((clr: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    key={clr}
                    value={clr}
                    onChange={updateColor}
                    id={"colors-choice-" + clr}
                    label={
                        <span
                            style={{
                                backgroundColor: clr,
                                display: "inline-list-item"
                            }}
                        >
                            {"\t" + clr.charAt(0).toUpperCase() + clr.slice(1)}
                        </span>
                    }
                    checked={color === clr}
                />
            ))}
        </div>
    );
}
function ColorOfText({ color }: { color: string }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "25px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        >
            {color}
        </div>
    );
}
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(colorss[0]);
    return (
        <div>
            <h3>Change Color:</h3>
            <ListColors color={color} setColor={setColor}></ListColors>
            You chose: <ColorOfText color={color}></ColorOfText>
        </div>
    );
}
