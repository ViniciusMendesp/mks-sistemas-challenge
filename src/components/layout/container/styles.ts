import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 3.125rem 33.75rem;

  @media (max-width: 768px) { // Para telas de tamanho de tablet
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) { // Para telas de tamanho de celular
    grid-template-columns: repeat(1, 1fr);

  }
`