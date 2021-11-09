import Big from "big.js";

export const calculateSomeFancyStuff: (input: AnInputType) => AnOutputType;

export interface AnInputType {
    AnInputField: Big;
    AnotherInputField: Big;
}

export interface AnOutputType {
    AnOutputField: Big;
    AnotherOutputField: Big;
}
