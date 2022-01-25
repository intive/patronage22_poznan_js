let value = "";
const onInputChange = (newValue) => {
    value = newValue;
}

export function Input(props){
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>    
            <input 
                id={props.id} 
                name={props.name} 
                type={props.type} 
                value={props.value} 
                error={props.error}
                onChange={props.onInputChange}/>  

                {props.error && <div style={{color: "red"}}>{props.error}</div>}
        </>
    )
}