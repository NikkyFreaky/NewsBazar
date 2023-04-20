import React from 'react';
import './news-list.css';
import { INewsList } from '../../models';
import { NewsElement } from '../NewsElement';

export const NewsList: React.FC<INewsList> = ({
  status,
  totalResults,
  articles,
}) => {
  return (
    <div>
      {status === 'ok' ? (
        <div>
          <h1>Было найдено: {totalResults}</h1>
          {articles.map((article) => <NewsElement article={article}/>)}
        </div>
      ) : (
        <div>Произошла ошибка.</div>
      )}
    </div>
  );
};
