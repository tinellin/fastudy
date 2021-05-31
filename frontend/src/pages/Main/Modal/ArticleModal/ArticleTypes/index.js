import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';

import { TopicContent, TextContent, ImageContent } from './styles';

import Preview from '../../../../../templates/Preview';

import { changeTopic, changeText, changeImage } from '@/articleActions';

export function Topic(props) {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.article);

  return (
    <TopicContent>
      <motion.input
        type="text"
        id="topic"
        placeholder="Digite o tópico aqui..."
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onChange={(e) => dispatch(changeTopic(e, content, props.counter))}
        value={content[props.counter] ? content[props.counter].content : ''}
      />
    </TopicContent>
  );
}

export function Text(props) {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.article);

  return (
    <TextContent
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ durantion: 0.5 }}
    >
      <TextareaAutosize
        id="text"
        placeholder="Digite o texto aqui..."
        value={content[props.counter] ? content[props.counter].content : ''}
        onChange={(e) => dispatch(changeText(e, content, props.counter))}
      ></TextareaAutosize>
    </TextContent>
  );
}

export function Image(props) {
  const dispatch = useDispatch();
  const { content, files } = useSelector((state) => state.article);

  let file = files[props.imgCounter];

  return (
    <ImageContent
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Preview
        name="Clique aqui para selecionar uma imagem"
        id={`img-${props.imgCounter}`}
        preview={file ? file.preview : null}
        onChange={(e) =>
          dispatch(
            changeImage(e, content, files, props.counter, props.imgCounter)
          )
        }
      />
    </ImageContent>
  );
}
