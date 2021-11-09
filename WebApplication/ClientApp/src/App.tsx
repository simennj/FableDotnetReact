import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {calculateSomeFancyStuff} from "./fableOutput/BusinessLogic/FancyCalculations";
import Big from "big.js";

export const App = () => {
    const [input, setInput] = useState({AnInputField: '0', AnotherInputField: '0'})
    const inputSetter = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
        setInput(prevState => ({...prevState, [target.name]: target.value}))
    }, [])
    const output = useMemo(() => calculateSomeFancyStuff({
        AnInputField: new Big(input.AnInputField),
        AnotherInputField: new Big(input.AnotherInputField)
    }), [input])
    console.log(input, output)
    return <>
        <label>
            AnInput
            <input name='AnInputField' value={input.AnInputField} onChange={inputSetter}/>
        </label>
        <label>
            AnotherInput
            <input name='AnotherInputField' value={input.AnotherInputField} onChange={inputSetter}/>
        </label>
        <hr/>
        <label>
            AnOutput
            <input value={output.AnOutputField.toString()} readOnly={true}/>
        </label>
        <label>
            AnotherOutput
            <input value={output.AnotherOutputField.toString()} readOnly={true}/>
        </label>
    </>
}
