import styled from "styled-components";

const mobileAndTablet = `@media (max-width: 768px)`;

export const Wrapper = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 486px;
  height: 100vh; 
  background-color: var(--primary);
  color: white;
  box-shadow: -10px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${(props) => (props.$isVisible ? "block" : "none")};

  ${mobileAndTablet} {
    width: 80%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${mobileAndTablet} {
    padding: 0.5rem; /* Reduz o padding em dispositivos móveis e tablets */
  }
`
 
export const WrapperItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2.5rem;

  ${mobileAndTablet} {
    padding: 0.5rem;
  }
`

export const WrapperProductsTitleAndButton = styled.div`
display: flex;
flex-direction: column;
gap: 2.5rem;
`

export const WrapperTitleAndButtonClose = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;

  ${mobileAndTablet} {
    font-size: 1.5rem; /* Reduz o tamanho da fonte em dispositivos móveis e tablets */
  }
`

export const ButtonClose = styled.button`
  border-radius: 100%;
  padding: 0.8rem;
  border: none;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${mobileAndTablet} {
    padding: 0.5rem; /* Reduz o padding em dispositivos móveis e tablets */
  }
`

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  gap: 1.75rem;
  width: 100%;
  max-height: 60vh;
  overflow-y: auto;
`

export const WrapperTotalValue = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`

export const LabelTotalValue = styled.span`
  font-weight: 700;
  font-size: 1.75rem;
`

export const TotalValue = styled.span`
  font-weight: 700;
  font-size: 1.75rem;
`

export const Button = styled.button`

  cursor: pointer;
  width: 100%;
  border: none;
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: 1.75rem;
  
  padding: 2.5rem;
  align-self: flex-end; 
  margin-top: auto;

  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }
`