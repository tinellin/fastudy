import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserAlt, FaReceipt } from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';

import { Container } from './styles';

import { getFeedback } from '@/lessonDoActions';
import { render, disconnect } from '@/mainActions';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { subjectId, page } = useSelector((state) => state.main);
  const { data } = useSelector((state) => state.auth);

  return (
    <Container>
      <div id="triangle" />
      <div id="user-menu">
        <Link
          className="user-options"
          to={{
            pathname: '/profile',
            state: { id: data.id, name: data.name, img: data.img },
          }}
        >
          <p>Meu perfil</p>
          <div className="icon">
            <FaUserAlt size="23" />
          </div>
        </Link>
        {subjectId ? (
          <a
            onClick={() => {
              dispatch(render('FEEDBACK', 'Lições feitas'));
              dispatch(getFeedback(data.id, subjectId, page));
            }}
          >
            <div className="user-options">
              <p>Lições feitas</p>
              <div className="icon">
                <FaReceipt size="30" />
              </div>
            </div>
          </a>
        ) : (
          ''
        )}
        <div className="user-options" onClick={() => dispatch(disconnect())}>
          <p>Sair</p>
          <div className="icon">
            <IoMdExit size="23" />
          </div>
        </div>
      </div>
    </Container>
  );
}
