import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPencilAlt, FaUserEdit, FaRegClock } from 'react-icons/fa';

import { ArticleContainer, ArticleCard } from './styles';

import { openModal, renderModal } from '@/modalActions';
import { Pagination } from '../Pagination';
import { MODAL_ARTICLE, MODAL_ARTICLE_READ } from '../Modal/allModalTypes';
import { openArticle } from '@/articleActions';

export default function ArticleList() {
  const dispatch = useDispatch();
  const { allArticles } = useSelector((state) => state.article);

  return (
    <>
      <ArticleContainer>
        {allArticles.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                dispatch(openModal(MODAL_ARTICLE));
                dispatch(renderModal(MODAL_ARTICLE_READ));
                dispatch(openArticle(article.id, allArticles));
              }}
            >
              <div id="time">
                <FaRegClock className="icon" />
                <h2>Tempo de leitura: {article.readingTime} min</h2>
              </div>
              <div id="data-container">
                <div className="data">
                  <FaUserEdit className="icon" />
                  <h2>{article.user.username}</h2>
                </div>
                <div className="data">
                  <FaPencilAlt className="icon" />
                  <h2>{article.title}</h2>
                </div>
              </div>
            </ArticleCard>
          );
        })}
      </ArticleContainer>
      <Pagination />
    </>
  );
}
