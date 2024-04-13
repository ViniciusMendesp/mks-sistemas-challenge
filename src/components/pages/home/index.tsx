
import * as S from "./styles";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export function HomePage() {
  return (
    <S.Wrapper>
      <Header  />
      <Container/>
      <Footer/>
    </S.Wrapper>
  )
}