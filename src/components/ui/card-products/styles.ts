import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 280px;
  height: 100%;

  -webkit-box-shadow: 0px 0px 5px 2px rgba(44,44,44,0.08);
  -moz-box-shadow: 0px 0px 5px 2px rgba(44,44,44,0.08);
  box-shadow: 0px 0px 5px 2px rgba(44,44,44,0.08);
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ImageNext = styled(Image)`
  width: 70%;
  height: 100%;
`

export const DetailsProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px; 

  align-self: flex-end; 
  margin-top: auto;
`

export const DetailsNameAndValue = styled.div`
display: flex;
justify-content: space-between;

`

export const Name = styled.h2`
  color: var(--text);
  font-size: 1rem;
  font-weight: regular;
`

export const Price = styled.span`
  background-color: #373737;
  padding: 0.25rem 0.375rem;
  border-radius: 8px;
  color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  font-size: 1rem;
  font-weight: bold;
`

export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 0 0 8px 8px;
  background-color: var(--primary);
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  padding: 0.625rem;
  align-self: flex-end; 
  margin-top: auto;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`