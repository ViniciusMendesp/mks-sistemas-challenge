import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 3.125rem 33.75rem;

  @media (max-width: 1024px) { 
   display: flex;
   flex-wrap: wrap;
   padding: 1rem;
  }

  @media (max-width: 768px) { 
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }

  @media (max-width: 480px) { // Para telas de tamanho de celular
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
  }
`