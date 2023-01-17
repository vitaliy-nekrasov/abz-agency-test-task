import svg from "../../img/Preloader.svg";
import { Spinner, Wrapper } from "./Loader.styled";

export function Loader() {
  return (
    <Wrapper>
      <Spinner src={svg} width={48} height={48} alt="preloader" />
    </Wrapper>
  );
}
