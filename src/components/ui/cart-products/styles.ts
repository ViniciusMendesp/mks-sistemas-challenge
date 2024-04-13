import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
border-radius: 8px;
background-color: var(--background);
display: flex;
height: 95px;
width: 99%;
color: var(--text);
`

export const WrapperImageNext = styled.div`
width: 95px;
height: 100%;

display: flex;
align-items: center;
justify-content: center;
`

export const ImageNext = styled(Image)`
width: 80%;
height: auto;
`


export const WrapperDetails = styled.div`
display: flex;
padding: 20px;
width: 100%;
justify-content: space-between;
align-items: center;
`

export const WrapperCounterAndPrice = styled.div`
 @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Name = styled.span`
width: 100px;
font-size: 0.875rem;
font-weight: regular;
`


export const Price = styled.span`
font-size: 0.875rem;
font-weight: bold;
`