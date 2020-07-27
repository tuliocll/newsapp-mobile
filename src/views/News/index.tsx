import React, {useEffect, useState, useContext} from 'react';
import {RouteProp} from '@react-navigation/native';
import {formatDistance, parseISO} from 'date-fns';

import {
  Container,
  Card,
  CardBody,
  CardFooter,
  Row,
  Image,
  Title,
  SmallText,
  Description,
  Time,
  HeartIcon,
} from './styles';
import placeholderImage from '../../../assets/images/default-placeholder-1-2.png';
import {StateContext} from '../../state/provider/applicationProvider';

type PostType = {
  id: number;
  title: string;
  description: string;
  like: number;
  photo_id: string;
  created_at: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
};

const News: React.FC = ({route}: {route: RouteProp}) => {
  const [post, setPost] = useState<PostType>();

  const {newsId} = route.params;
  const {state} = useContext(StateContext);

  const {token} = state.user;

  async function getPost() {
    const response = await fetch(`http://127.0.0.1:3333/news/${newsId}`, {
      method: 'GET',
      headers: [['Authorization', `bearer ${token}`]],
    });

    if (response.status === 200) {
      const data = await response.json();

      setPost(data);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <Card>
        <Image
          source={
            post?.photo_id
              ? {uri: `http://127.0.0.1:3333/photos/${post?.photo_id}`}
              : placeholderImage
          }
        />
        <CardBody>
          <Title>{post?.title}</Title>
          <Time>
            {post?.created_at &&
              formatDistance(parseISO(post?.created_at), new Date())}
          </Time>

          <Description>{post?.description}</Description>
        </CardBody>

        <CardFooter>
          <Row>
            <HeartIcon />
            <SmallText> Curtidas</SmallText>
          </Row>

          <Row>
            <SmallText>{`Postado por: ${post?.user?.username}`}</SmallText>
          </Row>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default News;
