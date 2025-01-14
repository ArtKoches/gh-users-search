import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const ErrorMsg = styled.p`
  color: red;
  text-align: center;
  margin-top: 0.3rem;
`;
