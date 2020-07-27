import styled from 'styled-components/native';
import imageHeader from '../../../assets/images/header.jpg';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Form = styled.View`
  padding: 0px 50px;
`;

export const HeaderImage = styled.Image.attrs({
  source: imageHeader,
  resizeMode: 'cover',
})`
  width: 100%;
  height: 300px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #7b7b7b;
  margin-top: 40px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderColor: '#afafaf',
})`
  min-height: 30px;
  border-bottom-width: 1px;
  font-size: 15px;
  border-bottom-color: #6c5b7b;
  background: transparent;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #6c5b7b;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ButtomText = styled.Text`
  color: #fff;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 45%;
`;
