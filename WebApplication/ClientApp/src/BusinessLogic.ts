export interface AnInputType {
    anInputField: number;
    anotherInputField: number;
}

export interface AnOutputType {
    anOutputField: number;
    anotherOutputField: number;
}

export const calculateSomeFancyStuff: (input: AnInputType) => AnOutputType = input => {
    const anOutputField = input.anInputField + input.anotherInputField;
    const anotherOutputField = input.anInputField * input.anotherInputField;
    return { anOutputField, anotherOutputField };
};
