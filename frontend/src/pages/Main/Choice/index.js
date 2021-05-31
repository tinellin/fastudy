import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ChoiceContainer } from './styles';

import { FaSearch } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { MdAssignment } from 'react-icons/md';

import { render, mouseOverText } from '@/mainActions';
import { getAllVideos } from '@/videosActions';
import { getAllArticles } from '@/articleActions';
import { getAllLessons } from '@/lessonDoActions';

export default function Choice() {
  const dispatch = useDispatch();
  const { cType, txt, icon, subjectId, page, j, k } = useSelector(
    (state) => state.main
  );
  const { id } = useSelector((state) => state.auth.data);

  return (
    <ChoiceContainer txt={txt}>
      <section
        className="nav-icons"
        onMouseOver={() => dispatch(mouseOverText('Vídeos'))}
        onClick={() => {
          dispatch(getAllVideos(subjectId, page, '', j, k));
          dispatch(render('VIDEO'));
        }}
        style={cType === 'VIDEO' ? icon : null}
      >
        <div className="icon">
          <AiOutlineVideoCamera />
        </div>
        <div className="tooltip">
          <h3>Vídeos</h3>
        </div>
        <div className="triangle" />
      </section>

      <section
        className="nav-icons"
        onMouseOver={() => dispatch(mouseOverText('Artigos'))}
        onClick={() => {
          dispatch(getAllArticles(subjectId, page, '', j, k));
          dispatch(render('ARTICLE'));
        }}
        style={cType === 'ARTICLE' ? icon : null}
      >
        <div className="icon">
          <RiArticleLine />
        </div>
        <div className="tooltip">
          <h3>Artigos</h3>
        </div>
        <div className="triangle" />
      </section>

      <section
        className="nav-icons"
        onMouseOver={() => dispatch(mouseOverText('Exercícios'))}
        onClick={() => {
          dispatch(getAllLessons(id, subjectId, page, '', j, k));
          dispatch(render('LESSON', 'Lições'));
        }}
        style={cType === 'LESSON' ? icon : null}
      >
        <div className="icon">
          <MdAssignment />
        </div>
        <div className="tooltip">
          <h3>Lições</h3>
        </div>
        <div className="triangle" />
      </section>
    </ChoiceContainer>
  );
}
