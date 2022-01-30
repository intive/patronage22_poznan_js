import { InputStyle, InputWrapper, LabelStyle } from 'components/Form/styleComponents';

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
            {props.error && <div style={{ color: "red", marginLeft:"81%", width: "40%", position:"absolute"}}>{props.error}</div>}
        </InputWrapper>
    )
}
