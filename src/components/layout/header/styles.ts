import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 1rem 4rem;
  background-color: var(--primary);
  color: var(--background);
  position: relative;

  min-width: 100%;

  @media (max-width: 375px) { 
    padding: 0.5 1rem;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) { 
    gap: 1rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`

export const Span = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
`