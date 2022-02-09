import {
  SearchContainer,
  SearchButton,
  SearchInput,
  ClearInputButton,
} from "./searchStyled";
import { useState } from "react";

export default function Search() {
  const [buttonState, setButtonChange] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <SearchContainer style={buttonState ? { width: 300 } : { width: 30 }}>
      {buttonState && (
        <>
          <SearchButton onClick={() => setButtonChange(!buttonState)}>
            S{/*  {/@Todo icon Search} */}
          </SearchButton>
          <SearchInput
            placeholder="Title, Actors, Film genre"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></SearchInput>
          {inputValue.length > 0 ? (
            <ClearInputButton onClick={() => setInputValue(" ")}>
              X {/*  {/@Todo icon Close} */}
            </ClearInputButton>
          ) : null}
        </>
      )}
      {buttonState ? null : (
        <SearchButton onClick={() => setButtonChange(!buttonState)}>
          S
        </SearchButton>
      )}
    </SearchContainer>
  );
}
