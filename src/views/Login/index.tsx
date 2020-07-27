import React, {useContext, useState} from 'react';

import {
  Button,
  ButtonContainer,
  TextInput,
  ButtomText,
  Label,
  HeaderImage,
  Container,
  Form,
} from './styles';

import {StateContext} from '../../state/provider/applicationProvider';
import {Types} from '../../state/reducers/userReducer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {state, dispatch} = useContext(StateContext);

  async function handleLogin() {
    try {
      if (email === '' || password === '') {
        return false;
      }

      const response = await fetch('http://127.0.0.1:3333/sessions', {
        method: 'POST',
        headers: [
          ['Accept', 'application/json'],
          ['Content-Type', 'application/json'],
        ],
        body: JSON.stringify({email, password}),
      });

      if (response.status !== 200) {
        return false;
      }

      const user = await response.json();

      dispatch({
        type: Types.SignIn,
        payload: {
          userName: user.username,
          signed: true,
          token: user.token,
        },
      });
    } catch (err) {}
  }

  return (
    <Container>
      <HeaderImage />
      <Form>
        <Label>Email</Label>
        <TextInput placeholder="usuario@email.com" onChangeText={setEmail} />
        <Label>Senha</Label>
        <TextInput
          placeholder="********"
          textContentType="password"
          onChangeText={setPassword}
        />

        <ButtonContainer>
          <Button onPress={handleLogin}>
            <ButtomText>ENTRAR</ButtomText>
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Login;
