import React from 'react';
import { motion } from 'framer-motion';
import { FaUpload } from 'react-icons/fa';

import { ImagePreview } from './styles';

export const createFile = (file) => {
  return {
    file,
    name: file.name,
    editedName: '',
    type: file.type,
    size: file.size,
    preview: URL.createObjectURL(file),
  };
};

export default function Preview(props) {
  let id = props.id ? props.id : 'upload';

  return (
    <ImagePreview>
      <input
        type="file"
        name="upload"
        id={id}
        accept="image/*"
        onChange={props.onChange}
      />
      <motion.div id="preview" whileHover={{ scale: 1.01 }}>
        <label htmlFor={id} id="label-upload">
          <FaUpload id="upload-icon" />
          <motion.p
            initial={{ scale: 0, opacity: 0, y: -100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {props.preview ? (
              <img src={props.preview} id="img-preview" />
            ) : (
              props.name
            )}
          </motion.p>
        </label>
      </motion.div>
    </ImagePreview>
  );
}
