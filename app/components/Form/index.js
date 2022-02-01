import { ErrorStyle, InputStyle, InputWrapper, LabelStyle } from 'components/Form/styleComponents';

export function Input(props) {
    return (
        <InputWrapper>
            <LabelStyle htmlFor={props.id}>{props.label}</LabelStyle>
            <InputStyle
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onInputChange} />
            {props.error && <ErrorStyle>{props.error}</ErrorStyle>}
        </InputWrapper>
    )
}
