import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ProfileContainer } from './styles';

import Field from '../../../templates/Field';
import Button from '../../../templates/Button';

import {
  changeState,
  changeCity,
  changeCountry,
  changePsw,
  changeNewPsw,
  changeConfirmNewPsw,
  sendLocation,
  verifyOldPassword,
  updatePassword,
  getCreatedAt,
  getLocation,
  changeUserImg,
} from '@/profileActions';

import { verifyPassword } from '@/registerActions';

import { verifyToken } from '@/authActions';

export default function Profile(props) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const data = useSelector((state) => state.profile);
  const { card } = useSelector((state) => state.register);
  const history = useHistory();

  const state = props.location.state;

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(getLocation(state.id));
    dispatch(getCreatedAt(state.id));
  }, [dispatch]);

  const responsive = window.innerWidth;

  return (
    <ProfileContainer>
      <ToastContainer>{modal.error}</ToastContainer>
      <section>
        <div id="card-image">
          <div id="image">
            <input
              type="file"
              accept="image/*"
              id="user-img"
              onChange={(e) => dispatch(changeUserImg(e, state.id))}
            />
            <label htmlFor="user-img" style={{ cursor: 'pointer' }}>
              <img src={data.img ? data.img.userImg : state.img}></img>
            </label>
          </div>
          <h2>{state.name}</h2>
          <div id="card-location">
            {data.location.city !== ''
              ? `${data.location.city}, ${data.location.state}, ${data.location.country}`
              : ''}
          </div>
        </div>
        <div id="card-date">
          <p>ALUNO DESDE: {data.createdAt}</p>
        </div>
      </section>
      <div id="card-information">
        <div id="location">
          <div id="state">
            <h3>Estado</h3>
            <Field
              type="text"
              width="45"
              height="50"
              marginTop="5"
              onChange={(e) => dispatch(changeState(e))}
              placeholder={data.location.state}
              value={data.state}
            />
          </div>
          <div>
            <h3>Cidade</h3>
            <Field
              type="text"
              width={responsive <= 375 ? '250' : '300'}
              height="50"
              marginTop="1"
              top="30"
              icon="place"
              placeholder={data.location.city}
              onChange={(e) => dispatch(changeCity(e))}
            />
          </div>
        </div>
        <div id="country">
          <h3>País</h3>
        </div>
        <Field
          type="text"
          width={responsive <= 375 ? '330' : '380'}
          height="50"
          marginTop="3"
          top="40"
          icon="place"
          placeholder={data.location.country}
          onChange={(e) => dispatch(changeCountry(e))}
        />
        <Button
          width="250"
          height="55"
          marginTop="5"
          marginBottom="2"
          name="Enviar"
          onClick={() => dispatch(sendLocation(data, state.id))}
        />
        <div id="password">
          <h2>Troca de senha</h2>
          <h3>Senha atual</h3>
          <Field
            type="password"
            width={responsive <= 375 ? '325' : '350'}
            height="50"
            marginTop="1"
            top="30"
            icon="vpn_key"
            onChange={(e) => dispatch(changePsw(e))}
            onBlur={() => dispatch(verifyOldPassword(data, state.id))}
          />
          {data.disable ? (
            <>
              <h3>Senha nova</h3>
              <Field
                type="password"
                width={responsive <= 375 ? '325' : '350'}
                height="50"
                marginTop="1"
                top="30"
                icon="lock"
                onKeyUp={() => dispatch(verifyPassword(data.newPsw))}
                onChange={(e) => dispatch(changeNewPsw(e))}
              />
              {card}
              <h3>Confirme a senha</h3>
              <Field
                type="password"
                width={responsive <= 375 ? '325' : '350'}
                height="50"
                marginTop="1"
                top="30"
                icon="lock"
                onChange={(e) => dispatch(changeConfirmNewPsw(e))}
              />
            </>
          ) : (
            ''
          )}
        </div>
        <Button
          width="250"
          height="55"
          marginTop="5"
          marginBottom="2"
          name="Enviar"
          onClick={() => dispatch(updatePassword(data, state.id, history))}
        />
      </div>
    </ProfileContainer>
  );
}
