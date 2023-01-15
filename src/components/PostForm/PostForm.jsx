import { Button } from "../Button/Button";
import {
  Wrapper,
  Title,
  Input,
  PhoneInput,
  PhoneLabel,
  Select,
} from "./PostForm.styled";

export function PostForm() {
  return (
    <Wrapper>
      <Title>Working with POST request</Title>
      <form action="">
        <label>
          <Input type="text" placeholder="Your name" />
        </label>
        <label>
          <Input type="text" placeholder="Email" />
        </label>
        <label>
          <PhoneInput type="text" placeholder="Phone" />
        </label>
        <PhoneLabel>+38 (XXX) XXX - XX - XX</PhoneLabel>
        <Select>Select your position</Select>
        <label>
          <input type="radio" name="position" value="Frontend developer" />
          Frontend developer
        </label>
        <label>
          <input type="radio" name="position" value="Backend developer" />
          Backend developer
        </label>
        <label>
          <input type="radio" name="position" value="Designer" />
          Designer
        </label>
        <label>
          <input type="radio" name="position" value="QA" />
          QA
        </label>
        <label>
          <input type="file" />
        </label>
        <Button type={"submit"} text={"Sign up"} />
      </form>
    </Wrapper>
  );
}
