import logo from "../../img/logo.svg";
import { HandySvg } from "handy-svg";
import { Button } from "../Button/Button";
import { Wrapper } from "./Header.styled";

export function Header() {
  return (
    <Wrapper>
      <HandySvg src={logo} width="104" height="26" />
      <div>
        <Button type={"button"} text="Users" />
        <Button type={"button"} text="Sign up" />
      </div>
    </Wrapper>
  );
}
