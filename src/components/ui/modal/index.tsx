import { ButtonClose } from "@/components/layout/cart/styles";
import Image from "next/image";
import * as S from "./styles";
import XIcon from "/public/icons/x.svg";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string
  onClose: () => void;
}

export function Modal({ isOpen, title, description, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <S.Wrapper>
      <S.ModalContent>
        <S.ButtonWrapper>
          <ButtonClose onClick={onClose} aria-label="Fechar modal">
            <Image src={XIcon} alt="Botão de fechar"/>
          </ButtonClose>
        </S.ButtonWrapper>
       
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ModalContent>
    </S.Wrapper>
  );
}