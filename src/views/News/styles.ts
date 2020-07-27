import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View``;

export const Card = styled.View`
  background: #fff;
  border-radius: 6px;
`;

export const CardBody = styled.View`
  padding: 20px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  padding-top: 20px;
  border-top-color: #ccc;
  border-top-width: 1px;
`;

export const Row = styled.View`
  flex-direction: row;
  background: #fff;
`;

export const Col = styled.View`
  background: #fff;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  color: #7e7e7e;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: #272727;
`;

export const Description = styled.Text`
  margin-top: 10px;
  color: #7e7e7e;
  font-size: 17px;
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
