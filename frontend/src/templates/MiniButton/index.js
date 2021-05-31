import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Content } from './styles';

export default function MiniButton(props) {
  return (
    <Content marginLeft={props.marginLeft} marginRight={props.marginRight}>
      <div>
        <motion.button
          id="btn-add"
          className="btn"
          whileHover={{ scale: 1.2, rotate: [0, 360], duration: 0.4 }}
          whileTap={{ scale: 0.8 }}
          style={props.sAdd}
          onClick={props.add}
        >
          <FiPlus />
        </motion.button>
      </div>
      <div id="align">
        <motion.button
          id="btn-remove"
          className="btn"
          whileHover={{ scale: 1.2, rotate: [0, 360], duration: 0.4 }}
          whileTap={{ scale: 0.8 }}
          style={props.sRemove}
          onClick={props.remove}
        >
          <FaTrashAlt />
        </motion.button>
      </div>
    </Content>
  );
}
