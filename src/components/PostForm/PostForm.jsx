import { Button } from "../Button/Button";
import {
  Wrapper,
  Title,
  Input,
  PhoneInput,
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
  Img,
  Span,
  HelperText,
} from "./PostForm.styled";
import {
  getPositions,
  getToken,
  signUp,
  getUserById,
} from "../../services/users-api";
import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader";
import SuccessImg from "../../img/Success register.svg";

export function PostForm({ addNewUser }) {
  const [positions, setPositions] = useState([]);
  const [fileName, setFileName] = useState("Upload your photo");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPositions().then((res) => setPositions(res));
    getToken();
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

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData();
      const fileField = document.querySelector('input[type="file"]');
      formData.append("position_id", position);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("photo", fileField.files[0]);

      const resp = await signUp(formData);
      if (resp.success) {
        const newUser = await getUserById(resp.user_id);
        addNewUser(newUser.user);
        setIsSuccess(true);
      }
      e.target.reset();
      setIsLoading(false);
      setFileName("Upload your photo");
      resetForm();
    } catch (error) {
      setIsLoading(false);
      setBtnDisabled(false);
      alert("User with this phone or email already exist");
    }
  };

  return (
    <Wrapper>
      <Title>{!isSuccess && "Working with POST request"}</Title>
      {isSuccess ? (
        <Img src={SuccessImg} alt="User successfully registered" />
      ) : (
        <Form action="" autoComplete="off" onSubmit={submitForm}>
          <InputLabel>
            <Input
              type="text"
              name="name"
              minlength="2"
              maxlength="60"
              placeholder="Your name"
              pattern="^[A-Za-z]{2,60}"
              title="Username should contain 2-60 characters"
              required
              onChange={(e) => {
                setName(e.currentTarget.value);
                if (e.currentTarget.value !== "") {
                  e.currentTarget.classList.add("input");
                } else e.currentTarget.classList.remove("input");
              }}
            />
            <Span>Your name</Span>
            <HelperText>
              Username should contain 2-60 characters, only letters
            </HelperText>
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
              title="User email, must be a valid email according to RFC2822"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                if (e.currentTarget.value !== "") {
                  e.currentTarget.classList.add("input");
                } else e.currentTarget.classList.remove("input");
              }}
            />
            <Span>Email</Span>
            <HelperText>
              User email, must be a valid email according to RFC2822
            </HelperText>
          </InputLabel>
          <InputLabel>
            <PhoneInput
              type="tel"
              placeholder="Phone"
              name="phone"
              pattern="[\+]{0,1}380([0-9]{9})$"
              title="User phone number. Number should start with code of Ukraine +380"
              required
              onChange={(e) => {
                setPhone(e.currentTarget.value);
                if (e.currentTarget.value !== "") {
                  e.currentTarget.classList.add("input");
                } else e.currentTarget.classList.remove("input");
              }}
            />
            <Span>Phone</Span>
            <HelperText>
              Number should start with code of Ukraine +380
            </HelperText>
          </InputLabel>
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
            <FileInput
              type="file"
              name="photo"
              onChange={getFileName}
              accept="image/jpg"
              size={5242880}
              required
            />
            <FileButton>Upload</FileButton>
            <FileText>{fileName}</FileText>
          </FileLabel>
          <Div>
            {isLoading ? (
              <Loader />
            ) : (
              <Button
                type={"submit"}
                text={"Sign up"}
                disabledBoolean={btnDisabled}
              />
            )}
          </Div>
        </Form>
      )}
    </Wrapper>
  );
}
