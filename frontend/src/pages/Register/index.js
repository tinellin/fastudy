import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { RegisterContainer } from './styles';
import Button from '../../templates/Button';
import { FinalMessage } from '../../templates/Button/styles';

import Field from '../../templates/Field';
import {
  changePerson,
  changeEmail,
  changePassword,
  changeConfirm,
  openCard,
  closeCard,
  verifyPassword,
} from '@/registerActions';

import { signup } from '@/authActions';

import logo from '../Initial/homeImgs/logo.png';

export default function Signup() {
  const dispatch = useDispatch();

  const register = useSelector((state) => state.register);
  const error = useSelector((state) => state.auth.error);
  const history = useHistory();

  return (
    <RegisterContainer>
      <motion.div
        className="animation"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
        <form id="container-signup">
          <h2>Cadastrar</h2>
          <img src={logo} id="logo" />
          <div id="content">
            {error}
            <Field
              icon="person"
              type="text"
              width="310"
              height="50"
              marginTop="5"
              top="42"
              placeholder="Nome"
              onChange={(e) => dispatch(changePerson(e))}
            />
            <Field
              icon="email"
              type="text"
              width="310"
              height="50"
              marginTop="5"
              top="42"
              placeholder="Email"
              onChange={(e) => dispatch(changeEmail(e))}
            />
            <Field
              icon={register.icon}
              type="password"
              width="310"
              height="50"
              marginTop="5"
              top="42"
              placeholder="Senha"
              onChange={(e) => dispatch(changePassword(e))}
              onFocus={() => {
                dispatch(openCard());
                dispatch(verifyPassword(register.field.password));
              }}
              onBlur={() => dispatch(closeCard(register.close))}
              onKeyUp={() => dispatch(verifyPassword(register.field.password))}
            />
            {register.card}
            <Field
              icon={register.icon}
              type="password"
              width="310"
              height="50"
              marginTop="5"
              top="42"
              placeholder="Confirmar sua Senha"
              onChange={(e) => dispatch(changeConfirm(e))}
            />
            <Button
              type="submit"
              width="310"
              height="50"
              marginTop="7"
              name="Cadastrar"
              onClick={(e) => {
                dispatch(
                  signup({ ...register.field }, register.close, e, history)
                );
              }}
            />
            <FinalMessage>
              Já tem uma conta?{' '}
              <Link to="/login" className="link-entrar">
                Entre
              </Link>
            </FinalMessage>
          </div>
        </form>
      </motion.div>
    </RegisterContainer>
  );
}
