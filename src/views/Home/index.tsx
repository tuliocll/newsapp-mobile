import React, {useEffect, useState, useContext} from 'react';

import {Container} from './styles';
import NewsCard, {NewsType} from '../../components/News';
import {StateContext} from '../../state/provider/applicationProvider';

const Login = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const {state} = useContext(StateContext);

  const {token} = state.user;

  async function getNews() {
    const response = await fetch('http://127.0.0.1:3333/news', {
      method: 'GET',
      headers: [['Authorization', `bearer ${token}`]],
    });

    console.log(response.status);

    if (response.status === 200) {
      const news = await response.json();

      setNews(news.data);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container>
      {news.length > 0 &&
        news.map((element) => (
          <NewsCard key={`news-${element.id}`} data={element} />
        ))}
    </Container>
  );
};

export default Login;
