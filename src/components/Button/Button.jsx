import { Btn } from "./Button.styled";

export function Button({ text, btnHandler, type, disabledBoolean }) {
  return (
    <Btn type={type} disabled={disabledBoolean} onClick={btnHandler}>
      {text}
    </Btn>
  );
}
