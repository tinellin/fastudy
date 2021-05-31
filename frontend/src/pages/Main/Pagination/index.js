import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { PaginationContainer, SquareContainer, Footer } from './styles';

import { getAllVideos } from '@/videosActions';
import { getAllArticles } from '@/articleActions';
import { getAllLessons, getFeedback } from '@/lessonDoActions';

export function Square(props) {
  return (
    <SquareContainer
      onClick={props.onClick}
      whileHover={{ scale: 1.05 }}
      style={props.style}
    >
      {props.children}
    </SquareContainer>
  );
}

export function Pagination() {
  const dispatch = useDispatch();
  const { pages, cType, subjectId, currentPage, search, j, k } = useSelector(
    (state) => state.main
  );
  const { id } = useSelector((state) => state.auth.data);

  function whichComponent(id, subjectId, currentPage, search, j, k) {
    if (cType === 'VIDEO')
      dispatch(getAllVideos(subjectId, currentPage, search, j, k));
    if (cType === 'ARTICLE')
      dispatch(getAllArticles(subjectId, currentPage, search, j, k));
    if (cType === 'LESSON')
      dispatch(getAllLessons(id, subjectId, currentPage, search, j, k));
    if (cType === 'FEEDBACK')
      dispatch(getFeedback(id, subjectId, currentPage, search, j, k));
  }

  return (
    <>
      <Footer>
        {pages.length > 1 ? (
          <PaginationContainer>
            <Square
              children={<RiArrowLeftSLine />}
              onClick={() => {
                whichComponent(id, subjectId, currentPage - 1, search, j, k);
              }}
            />
            {pages.map((page) => {
              return page;
            })}
            <Square
              children={<RiArrowRightSLine />}
              onClick={() => {
                whichComponent(id, subjectId, currentPage + 1, search, j, k);
              }}
            />
          </PaginationContainer>
        ) : (
          ''
        )}
      </Footer>
    </>
  );
}
