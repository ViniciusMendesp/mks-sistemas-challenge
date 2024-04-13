import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.span`
  font-size: 0.5rem;
  font-weight: regular;
`;

export const WrapperButtons = styled.div`
border: 1px solid #ccc;
border-radius: 8px;
background-color: var(--background);
`

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  border: none;
  padding: 5px 7px;
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 5px;
  color: var(--text);
  width: 20px; 
  text-overflow: ellipsis; 
  white-space: nowrap;
  overflow: hidden;
`;
