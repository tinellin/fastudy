import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { Content, File, ConfirmationContent, SentContent } from './styles';

import { renderModal, closeModal } from '@/modalActions';

import {
  addSupportMaterial,
  removeSupportMaterial,
  changeSubject,
  changeThumbnail,
  changeTitle,
  changeDescription,
  changeSupportMaterial,
  changeMaterialName,
  changeVideo,
  uploadVideo,
} from '@/videosActions';

import { sendArticle } from '@/articleActions';
import { confirmedSendExercises } from '@/lessonSendActions';

import Field from '../../../../../templates/Field';
import TextArea from '../../../../../templates/TextArea';
import Button from '../../../../../templates/Button';
import Preview from '../../../../../templates/Preview';
import MiniButton from '../../../../../templates/MiniButton';
import Subjects from '../../../../../templates/Subjects';

import {
  MODAL_VIDEO_SEND,
  MODAL_ARTICLE_SEND,
  MODAL_LESSON_SEND,
} from '../../allModalTypes';

export function SupportMaterial(props) {
  const dispatch = useDispatch();
  const { material } = useSelector((state) => state.videos);
  const { type, upload } = material[props.counter].style;
  let file = material[props.counter].file;

  let result = file.type ? file.type.split('/') : '';

  return (
    <motion.div
      id="content"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <File>
        <input
          type="file"
          name="supportMaterial"
          id={`file-${props.counter}`}
          accept="image/*, application/pdf"
          onChange={(e) =>
            dispatch(changeSupportMaterial(e, material, props.counter))
          }
        />
        <div id="upload-container">
          <div id="type" style={type}>
            <p>{result[1]}</p>
          </div>
          <motion.div id="upload" whileHover={{ scale: 1.04 }} style={upload}>
            <label htmlFor={`file-${props.counter}`} id="label-file">
              <p>
                {file.name
                  ? file.name
                  : 'Clique aqui e anexe um material de apoio em seu vídeo'}
              </p>
              {file.name ? (
                <input
                  type="text"
                  id="name"
                  placeholder="Digite aqui..."
                  onChange={(e) =>
                    dispatch(changeMaterialName(e, material, props.counter))
                  }
                />
              ) : null}
            </label>
          </motion.div>
        </div>
      </File>
    </motion.div>
  );
}

export function VideoSend() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth.data);
  const video = useSelector((state) => state.videos);
  const modal = useSelector((state) => state.modal);
  const responsive = window.innerWidth;

  return (
    <Content>
      <h1>Vídeo</h1>
      <h2>Matéria</h2>
      <Subjects
        onChange={(e) => dispatch(changeSubject(e))}
        width={responsive <= 375 ? '330' : '350'}
      />
      <Preview
        name="Clique aqui e selecione uma miniatura para o seu vídeo"
        onChange={(e) => dispatch(changeThumbnail(e))}
        preview={video.thumbnail.preview}
      />
      <Field
        icon="title"
        type="text"
        placeholder="Título do vídeo"
        width={responsive <= 375 ? '330' : '350'}
        height="50"
        marginTop="5"
        top="46"
        value={video.title}
        onChange={(e) => dispatch(changeTitle(e))}
      />
      <TextArea
        placeholder="Se desejar, digite aqui uma descrição para o seu vídeo."
        onChange={(e) => dispatch(changeDescription(e))}
        height="170"
        borderRadius="4"
        marginTop="5"
        marginBottom="2"
        padding="10"
        value={video.description}
        border={{ borderLeft: '4px solid #007bff' }}
      />
      <div id="support-material">
        <section>
          <h3>
            Material de apoio (Imagens e .PDF). Se desejar digite um nome para
            ele.
          </h3>
          <div>
            <MiniButton
              add={() =>
                dispatch(addSupportMaterial(video.material, modal.counter))
              }
              remove={() =>
                dispatch(removeSupportMaterial(video.material, modal.counter))
              }
              marginLeft="15"
            />
          </div>
        </section>
        <hr />
        <div id="supportMaterial-container">
          {video.material.map(({ component }) => component)}
        </div>
        <motion.div id="video-upload" whileHover={{ scale: 1.04 }}>
          <input
            type="file"
            name="video-input"
            id="video-input"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={(e) => dispatch(changeVideo(e))}
          />
          <div id="upload-preview">
            <label htmlFor="video-input" id="upload-label">
              {video.video
                ? video.video.name
                : 'Clique aqui para adicionar o seu vídeo'}
            </label>
          </div>
        </motion.div>
        <div id="send-container">
          <Button
            width="250"
            height="55"
            marginTop="8"
            name="Enviar"
            onClick={() => dispatch(uploadVideo(video, id))}
          />
        </div>
      </div>
    </Content>
  );
}

export function ModalConfirmation(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  /*
  const video = useSelector((state) => state.videos);
  const article = useSelector((state) => state.article);
  */
  const { files } = useSelector((state) => state.lessonSend);
  const modal = useSelector((state) => state.modal);

  return (
    <ConfirmationContent>
      <h2>Você tem certeza que deseja enviar?</h2>
      <div>
        <button
          id="yes"
          onClick={() => {
            /*
            if (props.type === 'MODAL_VIDEO_SEND')
              dispatch(uploadVideo(video, data.id));
            if (props.type === 'MODAL_ARTICLE_SEND')
              dispatch(
                sendArticle(article, article.content, article.files, data.id)
              );
            */
            if (props.type === 'MODAL_LESSON_SEND')
              dispatch(confirmedSendExercises(files, data.id));
          }}
        >
          Sim
        </button>
        <button
          id="no"
          onClick={() => {
            /*
            if (props.type === 'MODAL_VIDEO_SEND')
              dispatch(renderModal(MODAL_VIDEO_SEND, modal.counter, true));
            if (props.type === 'MODAL_ARTICLE_SEND')
              dispatch(renderModal(MODAL_ARTICLE_SEND));
            */
            if (props.type === 'MODAL_LESSON_SEND')
              dispatch(renderModal(MODAL_LESSON_SEND));
          }}
        >
          Não
        </button>
      </div>
    </ConfirmationContent>
  );
}

export function ModalThanked() {
  const dispatch = useDispatch();

  return (
    <SentContent>
      <h2>Obrigado :)</h2>
      <h3>Enviado com sucesso!</h3>
      <Button
        width="120"
        height="55"
        marginTop="4"
        name="Fechar"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        Finalizar
      </Button>
    </SentContent>
  );
}
