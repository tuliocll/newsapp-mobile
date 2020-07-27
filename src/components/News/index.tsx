import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {formatDistance, parseISO} from 'date-fns';

import {
  Card,
  Row,
  Image,
  Title,
  UserName,
  Col,
  Description,
  Time,
  HeartIcon,
  LikeButton,
} from './styles';
import placeholderImage from '../../../assets/images/default-placeholder-1-2.png';

export type NewsType = {
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

const News: React.FC = ({data}: {data: NewsType}) => {
  const {id, like, title, description, photo_id, user, created_at} = data;

  const url = `http://127.0.0.1:3333/photos/${photo_id}`;

  const date = formatDistance(parseISO(created_at), new Date());

  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate('News', {
      newsId: id,
    });
  }
  return (
    <Card onPress={handleClick}>
      <Row>
        <Image source={data.photo_id ? {uri: url} : placeholderImage} />
        <Col>
          <UserName>{user.username}</UserName>
          <Time>{date}</Time>
        </Col>
        <LikeButton>
          <HeartIcon />
        </LikeButton>
      </Row>
      <Col style={{marginTop: 20}}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Col>
    </Card>
  );
};

export default News;
