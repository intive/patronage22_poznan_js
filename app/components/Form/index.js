import { useState } from 'react';
import { FormRow, FormLabel, FormInput, ErrorMsg } from './form-styling-components'

export function Input({ id, name, type, label, value, errorMsg, onInputChange }) {
    const [isInputFocused, setIfInputIsFocused] = useState(false)

    return (
        <>
            <FormRow>
                <FormLabel isInputFocused={isInputFocused} htmlFor={id}>{label}</FormLabel>
                <FormInput
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onInputChange}
                    onFocus={() => setIfInputIsFocused(true)}
                    onBlur={e => !e.target.value && setIfInputIsFocused(false)}
                />
            </FormRow>
            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </>
    )
}
