import { LogoSvg } from "../LogoSvg/LogoSvg";
import { Button } from "../Button/Button";
import { Wrapper } from "./Header.styled";

export function Header() {
  return (
    <Wrapper>
      <LogoSvg />
      <div>
        <Button type={"button"} text="Users" />
        <Button type={"button"} text="Sign up" />
      </div>
    </Wrapper>
  );
}
