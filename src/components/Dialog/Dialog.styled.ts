import styled from "styled-components";
import { fadeIn } from "../../styles/Common.styled.ts";

export const DialogWrapper = styled.dialog`
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: #111827;
  border: 1px solid #ff8906;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 #ff8906;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 480px) {
    width: 300px;
    padding: 0.5rem;
  }
  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    width: 75%;
    max-height: 85%;
    overflow-y: auto;
    padding: 0.6rem;
  }
`;
