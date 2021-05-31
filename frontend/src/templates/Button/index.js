import React from "react";
import { motion } from "framer-motion";

import { SButton } from "./styles";

export default function Button(props) {
  return (
    <SButton
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      marginTop={props.marginTop}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {props.name}
    </SButton>
  );
}
