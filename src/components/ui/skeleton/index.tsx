import { motion } from 'framer-motion';
import styled from 'styled-components';

// Estilos para o elemento do esqueleto
const SkeletonItem = styled(motion.div)`
  width: 280px;
  height: 355.83px;
  background-color: gray;
  border-radius: 8px;
`;

export function SkeletonCardProducts() {
  const skeletonVariants = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
  };

  // Array com 8 elementos para simular 8 itens no esqueleto
  const skeletonItems = Array.from({ length: 8 });

  return (
    <>
      {skeletonItems.map((_, index) => (
        <SkeletonItem
          key={index}
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          variants={skeletonVariants}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
        />
      ))}
    </>
  );
}
