import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { Content, Topic, Text, Image } from './styles';

export default function ArticleRead() {
  const { article } = useSelector((state) => state.article);

  return (
    <Content>
      <h1>{article.title}</h1>
      <h2>{article.subtitle}</h2>
      <div>
        {article.content.map((item) => {
          if (item.type === 'topic') return <Topic>{item.content}</Topic>;
          if (item.type === 'text') {
            const text = item.content.match(/[^\r\n]+/g);
            return (
              <Text>
                {text.map((value) => {
                  return <p>{value}</p>;
                })}
              </Text>
            );
          }
          if (item.type === 'image') return <Image src={item.content} />;
        })}
      </div>
    </Content>
  );
}
