import { Btn } from "./Button.styled";

export function Button({ text, btnHandler, type }) {
  return (
    <Btn type={type} onClick={btnHandler}>
      {text}
    </Btn>
  );
}
