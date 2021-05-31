import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import { GrTextAlignLeft } from 'react-icons/gr';
import { FaRegImage } from 'react-icons/fa';
import { BiMessageAltDetail } from 'react-icons/bi';

import { Content, DragContent } from './styles';
import {
  setType,
  createComponent,
  setDashed,
  clearDashed,
  changeTitle,
  changeSubtitle,
  changeSubject,
  sendArticle,
} from '@/articleActions';

import { DRAG_BUTTON } from '../../allModalTypes';

import Field from '../../../../../templates/Field';
import Button from '../../../../../templates/Button';
import Subjects from '../../../../../templates/Subjects';

const DragButton = (props) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    item: { type: DRAG_BUTTON, id: props.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging() && dispatch(setType(props.id)),
    }),
    begin: () => dispatch(setDashed(props.id)),
    end: () => dispatch(clearDashed()),
  });

  return (
    <DragContent ref={drag} isDragging={isDragging} whileHover={{ scale: 1.1 }}>
      {props.icon}
      {props.name}
    </DragContent>
  );
};

export default function ArticleSend() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.modal);
  const { id } = useSelector((state) => state.auth.data);
  const article = useSelector((state) => state.article);
  const { component, type, dashed, imgCounter, files, content } = useSelector(
    (state) => state.article
  );

  const [, drop] = useDrop({
    accept: DRAG_BUTTON,
    drop: () => dispatch(createComponent(type, component, counter, imgCounter)),
  });

  return (
    <>
      <Content>
        <h1>Artigo</h1>
        <Field
          icon="title"
          type="text"
          placeholder="Título do artigo"
          width="400"
          height="50"
          marginTop="11"
          top="61"
          value={article.title}
          onChange={(e) => dispatch(changeTitle(e))}
        />
        <Field
          icon="subtitles"
          type="text"
          placeholder="Subtítulo do artigo"
          width="400"
          height="50"
          marginTop="11"
          top="61"
          value={article.subtitle}
          onChange={(e) => dispatch(changeSubtitle(e))}
        />
        <div id="subject">
          <h2>Matéria</h2>
          <Subjects
            width="400"
            onChange={(e) => dispatch(changeSubject(e))}
            value={article.subject}
          />
        </div>
        <h2>Componentes</h2>
        <div id="components">
          <DragButton
            id={1}
            name="Inserir tópico"
            icon={<BiMessageAltDetail className="icon" />}
          />
          <DragButton
            id={2}
            name="Inserir texto"
            icon={<GrTextAlignLeft className="icon" />}
          />
          <DragButton
            id={3}
            name="Inserir imagem"
            icon={<FaRegImage className="icon" />}
          />
        </div>
        <hr />
        <div id="area" ref={drop}>
          {component.map((item) => item)}
          <div style={dashed} />
        </div>
        <Button
          width="250"
          height="55"
          marginTop="5"
          marginBottom="2"
          name="Enviar"
          onClick={() => dispatch(sendArticle(article, content, files, id))}
        />
        <br></br>
        <br></br>
      </Content>
    </>
  );
}
