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
import { getPositions, getToken, signUp } from "../../services/users-api";
import { useState, useEffect } from "react";

export function PostForm() {
  const [positions, setPositions] = useState([]);
  const [fileName, setFileName] = useState("Upload your photo");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    getPositions().then((res) => setPositions(res));
    getToken().then((res) => setToken(res));
  }, []);

  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      position !== "" &&
      file !== ""
    ) {
      return setBtnDisabled(false);
    } else return setBtnDisabled(true);
  }, [email, file, name, phone, position]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPosition("");
    setFile("");
  };

  const getFileName = (e) => {
    const file = e.currentTarget.value.split("");
    file.splice(0, 12);
    setFileName(file.join(""));
    setFile(e.currentTarget.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const res = formData.forEach((value, name) => {
    //   console.log(name, value);
    // });

    const formData2 = {
      name: `required(${name})`,
      email,
      phone,
      position_id: position,
      photo: formData.get("photo"),
    };

    e.target.reset();
    // signUp(formData2, token);

    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: JSON.stringify(formData2),
      headers: {
        Token: token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.success) {
          // process success response
        } else {
          // proccess server errors
        }
      })
      .catch(function (error) {
        // proccess network errors
      });

    setFileName("Upload your photo");
    resetForm();
  };

  return (
    <Wrapper>
      <Title>Working with POST request</Title>
      <Form action="" onSubmit={submitForm}>
        <InputLabel>
          <Input
            type="text"
            name="name"
            minlength="2"
            maxlength="60"
            placeholder="Your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </InputLabel>
        <InputLabel>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            minlength="2"
            maxlength="60"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
            required
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </InputLabel>
        <InputLabel>
          <PhoneInput
            type="tel"
            placeholder="Phone"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
        </InputLabel>
        <PhoneLabel>+38 (XXX) XXX - XX - XX</PhoneLabel>
        <Select>Select your position</Select>

        {positions.map((position) => (
          <RadioLabel key={position.id}>
            <Radio
              type="radio"
              name="position_id"
              value={position.id}
              required
              onChange={(e) => setPosition(e.currentTarget.value)}
            />
            {position.name}
          </RadioLabel>
        ))}

        <FileLabel>
          <FileInput type="file" name="photo" onChange={getFileName} required />
          <FileButton>Upload</FileButton>
          <FileText>{fileName}</FileText>
        </FileLabel>
        <Div>
          <Button
            type={"submit"}
            text={"Sign up"}
            disabledBoolean={btnDisabled}
          />
        </Div>
      </Form>
    </Wrapper>
  );
}
