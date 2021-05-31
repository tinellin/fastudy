import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

import { verifyToken } from '@/authActions';
import { changeSearch, clickSearch, clearSearch } from '@/mainActions';

import { Container, SearchBar } from './styles';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Choice from './Choice';
import Field from '../../templates/Field';

export default function Main() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const modal = useSelector((state) => state.modal);
  const {
    component,
    cType,
    subjectId,
    subject,
    search,
    page,
    j,
    k,
  } = useSelector((state) => state.main);
  let color;

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  cType === 'HOME'
    ? (color = { backgroundColor: 'transparent' })
    : (color = { backgroundColor: 'white' });

  let choice;
  let searchComponent;
  const responsive = window.innerWidth;

  if (
    cType === 'VIDEO' ||
    cType === 'ARTICLE' ||
    cType === 'LESSON' ||
    cType === 'FEEDBACK'
  ) {
    choice = <Choice />;

    searchComponent = (
      <SearchBar>
        <Field
          type="text"
          icon="title"
          width={responsive <= 375 ? '230' : '350'}
          height={responsive <= 375 ? '30' : '50'}
          top={responsive <= 375 ? '15' : '24'}
          placeholder={`Pesquise assuntos em ${subject}`}
          onChange={(e) => dispatch(changeSearch(e))}
          onKeyUp={() =>
            dispatch(
              clearSearch(cType, subjectId, page, auth.data.id, search, j, k)
            )
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              dispatch(
                clickSearch(cType, subjectId, page, auth.data.id, search, j, k)
              );
            }
          }}
        />
        {responsive > 375 ? (
          <button id="search">
            <FaSearch
              onClick={() =>
                dispatch(
                  clickSearch(
                    cType,
                    subjectId,
                    page,
                    auth.data.id,
                    search,
                    j,
                    k
                  )
                )
              }
            />
          </button>
        ) : (
          ''
        )}
      </SearchBar>
    );
  }

  return (
    <>
      {auth.isLogged ? (
        <>
          {modal.isOpen}
          <Container>
            <Navbar />
            <Sidebar />
            <main>
              {choice}
              <div id="list" style={color}>
                {searchComponent}
                {component}
              </div>
            </main>
          </Container>
        </>
      ) : (
        auth.component
      )}
    </>
  );
}
