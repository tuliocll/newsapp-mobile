import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Card = styled.TouchableOpacity`
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  margin: 10px 0px;
`;

export const Row = styled.View`
  flex-direction: row;
  background: #fff;
`;

export const Col = styled.View`
  background: #fff;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
`;

export const UserName = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 19px;
  font-weight: 400;
  color: #272727;
`;

export const Description = styled.Text`
  margin-top: 10px;
  color: #7e7e7e;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #7e7e7e;
`;

export const LikeButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const HeartIcon = styled(Icon).attrs({name: 'heart', size: 20})`
  color: #c06c84;
`;
