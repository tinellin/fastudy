import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

import { render } from '@/mainActions';
import { openUserMenu, closeUserMenu } from '@/mainActions';
import { Opacity } from '../Modal/allModalStyles';

import logo from '../../Initial/homeImgs/logo.png';

export default function Navbar() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const { menu } = useSelector((state) => state.main);

  return (
    <>
      {menu ? <Opacity onClick={() => dispatch(closeUserMenu())} /> : ''}
      <Container>
        <div className="logo">
          <div onClick={() => dispatch(render('HOME'))}>
            <img src={logo} id="logo-img" />
          </div>
        </div>
        <div className="user" onClick={() => dispatch(openUserMenu())}>
          <h5>{data.name}</h5>
          <div>
            <img id="user-picture" src={data.img} alt="Foto do usuário" />
          </div>
          {menu}
        </div>
      </Container>
    </>
  );
}
