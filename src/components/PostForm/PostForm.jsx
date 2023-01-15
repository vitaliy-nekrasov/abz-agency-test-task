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
  InputLabel,
  Form,
} from "./PostForm.styled";

export function PostForm() {
  return (
    <Wrapper>
      <Title>Working with POST request</Title>
      <Form action="">
        <InputLabel>
          <Input type="text" placeholder="Your name" />
        </InputLabel>
        <InputLabel>
          <Input type="text" placeholder="Email" />
        </InputLabel>
        <InputLabel>
          <PhoneInput type="text" placeholder="Phone" />
        </InputLabel>
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
      </Form>
    </Wrapper>
  );
}
