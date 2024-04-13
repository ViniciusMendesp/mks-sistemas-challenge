import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;

  text-align: center;


  @media (max-width: 1024px) { 
    width: 35%;
  }

  @media (max-width: 768px) { 
    width: 55%;
  }

  @media (max-width: 480px) { 
    width: 85%;
  }
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
`

export const Title = styled.h1`
font-size: 1.5rem;
font-weight: 600;
color: var(--text)
`

export const Description = styled.p`
color: var(--text)
`

