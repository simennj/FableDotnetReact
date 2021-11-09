module BusinessLogic.FancyCalculations

type AnInputType = {
    AnInputField: decimal;
    AnotherInputField: decimal;
}

type AnOutputType = {
    AnOutputField: decimal;
    AnotherOutputField: decimal;
}

let calculateSomeFancyStuff (input: AnInputType) =
    let anOutputField = input.AnInputField + input.AnotherInputField;
    let anotherOutputField = input.AnInputField * input.AnotherInputField;
    { AnOutputField = anOutputField; AnotherOutputField = anotherOutputField }
