import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { LoginContainer } from './styles';
import { FinalMessage } from '../../templates/Button/styles';
import Button from '../../templates/Button';

import Field from '../../templates/Field';

import { useHistory } from 'react-router-dom';

import { changeEmail, changePassword } from '../../actions/registerActions';

import { login } from '../../actions/authActions';

export default function Login() {
  const dispatch = useDispatch();

  const field = useSelector((state) => state.register.field);
  const error = useSelector((state) => state.auth.error);

  const history = useHistory();

  return (
    <LoginContainer>
      <motion.div
        className="animation"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
        <form id="container-login">
          <p>Iniciar sessão</p>
          {error}
          <Field
            type="text"
            icon="email"
            width="300"
            height="50"
            marginTop="5"
            top="42"
            placeholder="Email"
            onChange={(e) => dispatch(changeEmail(e))}
          />
          <Field
            type="password"
            icon="lock"
            width="300"
            height="50"
            marginTop="5"
            top="42"
            placeholder="Senha"
            onChange={(e) => dispatch(changePassword(e))}
          />
          <Button
            type="submit"
            width="300"
            height="50"
            marginTop="6"
            name="Entrar"
            onClick={(e) => dispatch(login({ ...field }, history, e))}
          />
          <FinalMessage>
            Não tem uma conta?
            <Link to="/signup" className="link-entrar">
              Cadastrar-se
            </Link>
          </FinalMessage>
        </form>
      </motion.div>
    </LoginContainer>
  );
}
