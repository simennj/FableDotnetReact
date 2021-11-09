import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {calculateSomeFancyStuff} from "./BusinessLogic";

export const App = () => {
    const [input, setInput] = useState({anInputField: '0', anotherInputField: '0'})
    const inputSetter = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
        setInput(prevState => ({...prevState, [target.name]: target.value}))
    }, [])
    const output = useMemo(() => calculateSomeFancyStuff({
        anInputField: parseFloat(input.anInputField),
        anotherInputField: parseFloat(input.anotherInputField)
    }), [input])
    console.log(input, output)
    return <>
        <label>
            AnInput
            <input name='anInputField' value={input.anInputField} onChange={inputSetter}/>
        </label>
        <label>
            AnotherInput
            <input name='anotherInputField' value={input.anotherInputField} onChange={inputSetter}/>
        </label>
        <hr/>
        <label>
            AnOutput
            <input value={output.anOutputField} readOnly={true}/>
        </label>
        <label>
            AnotherOutput
            <input value={output.anotherOutputField} readOnly={true}/>
        </label>
    </>
}
