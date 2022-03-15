import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "HAL" | "CHR" | "THK" | "CNY" | "IND";
const holidayAlphaOrder: Record<Holidays, Holidays> = {
    CNY: "HAL",
    CHR: "CNY",
    THK: "CHR",
    IND: "THK",
    HAL: "IND"
};
const yearOrder: Record<Holidays, Holidays> = {
    IND: "HAL",
    THK: "CHR",
    CHR: "CNY",
    HAL: "THK",
    CNY: "IND"
};
export function CycleHoliday(): JSX.Element {
    const [Holidays, setHoliday] = useState<Holidays>("HAL");

    function nextByLetter(): void {
        setHoliday(holidayAlphaOrder[Holidays]);
    }

    function nextByDate(): void {
        setHoliday(yearOrder[Holidays]);
    }

    return (
        <div>
            <Button onClick={nextByLetter}>Advance by Alphabet</Button>
            <Button onClick={nextByDate}>Advance by Year</Button>
            <div>
                {Holidays === "CHR" ? (
                    <span>Holiday: 🎄</span>
                ) : Holidays === "HAL" ? (
                    <span>Holiday: 🎃</span>
                ) : Holidays === "IND" ? (
                    <span>Holiday:🎆</span>
                ) : Holidays === "THK" ? (
                    <span>Holiday: 🦃</span>
                ) : Holidays === "CNY" ? (
                    <span>Holiday: 🧧</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
