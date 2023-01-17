import { LogoSvg } from "../LogoSvg/LogoSvg";
import { Button } from "../Button/Button";
import { Wrapper } from "./Header.styled";

export function Header() {
  return (
    <Wrapper>
      <LogoSvg />
      <div>
        <Button
          type={"button"}
          text="Users"
          btnHandler={() => {
            window.scrollTo({ top: 650, behavior: "smooth" });
          }}
        />
        <Button
          type={"button"}
          text="Sign up"
          btnHandler={() => {
            window.scrollTo({ top: 2650, behavior: "smooth" });
          }}
        />
      </div>
    </Wrapper>
  );
}
