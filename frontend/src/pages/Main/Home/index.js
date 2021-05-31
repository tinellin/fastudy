import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdLibraryBooks, MdCheck } from 'react-icons/md';
import { HomeContent, SendContainer } from './styles';

import { getStatistics, setPagination } from '@/mainActions';

import video from './HomeImgs/video.png';
import article from './HomeImgs/article.png';
import lesson from './HomeImgs/lesson.png';

import { openModal, renderModal } from '@/modalActions';
import { createAnswers } from '@/lessonSendActions';

import {
  MODAL_VIDEO,
  MODAL_VIDEO_SEND,
  MODAL_ARTICLE,
  MODAL_ARTICLE_SEND,
  MODAL_LESSON,
  MODAL_LESSON_MENU,
} from '../Modal/allModalTypes';

export default function Home() {
  const dispatch = useDispatch();
  const { id, name, type } = useSelector((state) => state.auth.data);
  const { statistic } = useSelector((state) => state.main);
  const modal = useSelector((state) => state.modal);
  let { count, fields } = useSelector((state) => state.lessonSend);

  useEffect(() => {
    dispatch(getStatistics(id));
  }, []);

  return (
    <HomeContent>
      <section id="home-container">
        <h1>👋 Bem vindo 😀</h1>
        <h1>{name}</h1>
        {!type ? (
          <div className="icons-container">
            <div className="statistic">
              <div className="icon" id="qtyEx">
                <MdLibraryBooks />
              </div>
              <h2>{statistic ? statistic.done : '0'}</h2>
              <h3>
                lições <br></br> feitas.
              </h3>
            </div>
            <div className="statistic">
              <div className="icon" id="right">
                <MdCheck />
              </div>
              <h2>{statistic ? statistic.correct : '0'}</h2>
              <h3>acertos</h3>
            </div>
            <div className="statistic">
              <div className="icon" id="wrong">
                <MdClose />
              </div>
              <h2>{statistic ? statistic.wrong : '0'}</h2>
              <h3>erros</h3>
            </div>
          </div>
        ) : (
          <SendContainer>
            <motion.div
              className="home-div"
              whileHover={{ scale: 1.3 }}
              onClick={() => {
                dispatch(openModal(MODAL_VIDEO));
                dispatch(renderModal(MODAL_VIDEO_SEND));
              }}
            >
              <img src={video} className="home-img" />
              <p>Enviar um vídeo</p>
            </motion.div>
            <motion.div
              className="home-div"
              whileHover={{ scale: 1.3 }}
              onClick={() => {
                dispatch(openModal(MODAL_ARTICLE));
                dispatch(renderModal(MODAL_ARTICLE_SEND, '', modal.counter));
              }}
            >
              <img src={article} className="home-img" />
              <p>Enviar um artigo</p>
            </motion.div>
            <motion.div
              className="home-div"
              whileHover={{ scale: 1.3 }}
              onClick={() => {
                dispatch(openModal(MODAL_LESSON));
                dispatch(renderModal(MODAL_LESSON_MENU, modal.counter));
                dispatch(createAnswers('Y', count, fields));
              }}
            >
              <img src={lesson} className="home-img" />
              <p>Enviar uma lição</p>
            </motion.div>
          </SendContainer>
        )}
      </section>
    </HomeContent>
  );
}
