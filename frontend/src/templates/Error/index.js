import React from 'react';
import { motion } from 'framer-motion';
import { ContainerError } from './styles';

export function Error(props) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        damping: 15,
      }}
    >
      <ContainerError>
        <i className="material-icons icon" style={{ color: '#FF0000' }}>
          error_outline
        </i>
        <p id="error">{props.text}</p>
      </ContainerError>
    </motion.div>
  );
}
