import { Button } from "../Button/Button";
import { Title, Description, Wrapper, Main } from "./Hero.styled";

export function Hero() {
  return (
    <Main>
      <Wrapper>
        <Title>Test assignment for front-end developer</Title>
        <Description>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Description>
        <Button
          type={"button"}
          text="Sign up"
          btnHandler={() => {
            window.scrollTo({ top: 2650, behavior: "smooth" });
          }}
        />
      </Wrapper>
    </Main>
  );
}
