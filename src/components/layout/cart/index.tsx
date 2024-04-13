import { AddToCardProps, CartProducts } from '@/components/ui/cart-products';
import { Modal } from '@/components/ui/modal';
import { useCart } from '@/context/cartContext';
import { Product } from '@/pages/api/get-products';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';
import XIcon from "/public/icons/x.svg";

interface CartProps {
cartItems: AddToCardProps[];
addToCart: (product: Product) => void;
removeFromCart: (productId: string) => void;
onClose: () => void;
}

export function Cart({ onClose }: CartProps) {
  const { cartItems, removeFromCart, addToCart } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleFinalizePurchase = () => {
    if (cartItems.length > 0) {
      setIsModalOpen(true);
      
      cartItems.forEach((product) => {
        removeFromCart(String(product.id), product.quantity);
      });
    }
  };

  const isCartEmpty = cartItems.length === 0;

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  const convertPriceToNumber = (price: string | undefined): number => {
    if (!price || typeof price !== 'string') return 0; 
    return Number(price.replace(/[^\d.-]/g, ''));
  };

  const totalValue = cartItems.reduce((total, item) => {
    return total + convertPriceToNumber(item.price) * item.quantity; 
  }, 0);

  return (
    <S.Wrapper $isVisible>
      <S.Content>
      <S.WrapperItens>
        <S.WrapperProductsTitleAndButton>
        <S.WrapperTitleAndButtonClose>
          <S.Title>Carrinho de compras</S.Title>
          <S.ButtonClose onClick={onClose}>
            <Image src={XIcon} alt="Botão de fechar"/>
          </S.ButtonClose>

         
        </S.WrapperTitleAndButtonClose>
        <S.WrapperProducts>
            {cartItems.map((product) => (
             <CartProducts
               key={product.id}
               photo={product.photo}
               name={product.name}
               price={product.price}
               quantity={product.quantity}
               onAddToCart={() => addToCart(product)}
               onRemoveFromCart={() => removeFromCart(String(product.id))}
            />))}
          </S.WrapperProducts>
        </S.WrapperProductsTitleAndButton>
      

          <S.WrapperTotalValue>
            <S.LabelTotalValue>Total:</S.LabelTotalValue>
            <S.TotalValue>R${totalValue.toFixed(2)}</S.TotalValue>
          </S.WrapperTotalValue>
          
        </S.WrapperItens>
        <S.Button onClick={handleFinalizePurchase} disabled={isCartEmpty}>Finalizar compra</S.Button>
      </S.Content>
      <Modal isOpen={isModalOpen} onClose={closeModal} title='Pedido Confirmado' description='O seu pedido foi concluído com sucesso. Agradecemos por escolher nossa loja.'>
      </Modal>
    </S.Wrapper>
  )
}