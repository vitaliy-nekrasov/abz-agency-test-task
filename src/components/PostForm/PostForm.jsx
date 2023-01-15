import { Button } from "../Button/Button";
import {
  Wrapper,
  Title,
  Input,
  PhoneInput,
  PhoneLabel,
  Select,
  Radio,
  RadioLabel,
  FileInput,
  FileLabel,
  FileButton,
  FileText,
  Div,
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
        <RadioLabel>
          <Radio type="radio" name="position" value="Frontend developer" />
          Frontend developer
        </RadioLabel>
        <RadioLabel>
          <Radio type="radio" name="position" value="Backend developer" />
          Backend developer
        </RadioLabel>
        <RadioLabel>
          <Radio type="radio" name="position" value="Designer" />
          Designer
        </RadioLabel>
        <RadioLabel>
          <Radio type="radio" name="position" value="QA" />
          QA
        </RadioLabel>
        <FileLabel>
          <FileInput type="file" />
          <FileButton>Upload</FileButton>
          <FileText>Upload your photo</FileText>
        </FileLabel>
        <Div>
          <Button type={"submit"} text={"Sign up"} />
        </Div>
      </form>
    </Wrapper>
  );
}
