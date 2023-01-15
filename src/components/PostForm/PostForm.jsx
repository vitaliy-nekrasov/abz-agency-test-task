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
import { getPositions } from "../../services/users-api";
import { useState, useEffect } from "react";

export function PostForm() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getPositions().then((res) => setPositions(res));
  }, []);

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

        {positions.map((position) => (
          <RadioLabel key={position.id}>
            <Radio type="radio" name="position" value={position.name} />
            {position.name}
          </RadioLabel>
        ))}

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
